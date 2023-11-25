const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
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

  
OrderDetails.init(
  {
    orderDetailsID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: DataTypes.INTEGER,
    pricePerUnit: DataTypes.DECIMAL,
    // Additional fields as necessary
  },
  { sequelize, modelName: "OrderDetails" }
);

  return OrderDetails;
};
