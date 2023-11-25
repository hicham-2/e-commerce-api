const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envValidation = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
        PORT: Joi.number().default(5432),
        PSQL_HOST: Joi.string().default('db'),
        DB_USER: Joi.string().default('ecommerce-user'),
        DB_PASS: Joi.string().default('ChangeMe'),
        DB_NAME: Joi.string().default('ecommerce'),
        JWT_SECRET: Joi.string().default('4a7b2d1e6f8c9a0d3b5e2c7f9e1d5a8b').description('JWT secret key'),
        JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
            .default(30)
            .description('minutes after which access tokens expire'),
        JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
            .default(30)
            .description('days after which refresh tokens expire'),
        JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
            .default(10)
            .description('minutes after which reset password token expires'),
        JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
            .default(10)
            .description('minutes after which verify email token expires'),
        LOG_FOLDER: Joi.string().required(),
        LOG_FILE: Joi.string().required(),
        LOG_LEVEL: Joi.string().required(),
        REDIS_HOST: Joi.string().default('127.0.0.1'),
        REDIS_PORT: Joi.number().default(6379),
        REDIS_USE_PASSWORD: Joi.string().default('no'),
        REDIS_PASSWORD: Joi.string().default('lala'),
    })
    .unknown();

const { value: envVar, error } = envValidation
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

if (error) {
    console.log(error.message);
    throw new Error(`Config validation error: ${error.message}`);
}


module.exports = {
    nodeEnv: envVar.NODE_ENV,
    port: envVar.PORT,
    dbHost: envVar.PSQL_HOST,
    dbUser: envVar.POSTGRES_USER,
    dbPass: envVar.POSTGRES_PASSWORD,
    dbName: envVar.POSTGRES_DB,
    jwt: {
        secret: envVar.JWT_SECRET,
        accessExpirationMinutes: envVar.JWT_ACCESS_EXPIRATION_MINUTES,
        refreshExpirationDays: envVar.JWT_REFRESH_EXPIRATION_DAYS,
        resetPasswordExpirationMinutes: envVar.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
        verifyEmailExpirationMinutes: envVar.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
    },
    logConfig: {
        logFolder: envVar.LOG_FOLDER,
        logFile: envVar.LOG_FILE,
        logLevel: envVar.LOG_LEVEL,
    },
    redis: {
        host: envVar.REDIS_HOST,
        port: envVar.REDIS_PORT,
        usePassword: envVar.REDIS_USE_PASSWORD,
        password: envVar.REDIS_PASSWORD,
    },
};
