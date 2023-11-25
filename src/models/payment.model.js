const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
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

  Payment.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      type: DataTypes.STRING, // e.g., 'Stripe', 'PayPal'
      amount: DataTypes.DECIMAL,
      dateProcessed: DataTypes.DATE,
      orderID: DataTypes.INTEGER,
      // Additional fields as necessary
    },
    { sequelize, modelName: "Payment" }
  );
  

  return Payment;
};