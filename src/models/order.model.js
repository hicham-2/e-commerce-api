const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
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

  Order.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dateCreated: DataTypes.DATE,
      status: DataTypes.STRING,
      totalPrice: DataTypes.DECIMAL,
      // Add other relevant fields
    },
    { sequelize, modelName: "Order" }
  );

  return Order;
};


