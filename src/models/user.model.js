const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
          //  User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
        }
    }

    User.init(
        {
            uuid: {
                type: DataTypes.UUID,
                primaryKey: true,
                autoIncrement: true,
              },
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.INTEGER,
            email_verified: DataTypes.INTEGER,
            address: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            user_role: DataTypes.ENUM("ROLE_USER", "ROLE_STORE_KEEPER", "ROLE_ADMIN"),
            created_at: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'user',
            underscored: true,
        },
    );

    return User;
};
