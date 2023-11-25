const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
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

  Product.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      description: {
          type: DataTypes.TEXT,
          required: false,
      },
      price: {
          type: DataTypes.DECIMAL,
          required: false,
      },
      stockQuantity: {
          type: DataTypes.INTEGER,
          required: false,
      },
      categoryID: DataTypes.INTEGER,
      brandID: DataTypes.INTEGER,
      isPromotion: {
          type: DataTypes.BOOLEAN,
          required: false,
      },
      // Add other relevant fields
    },
    { sequelize, modelName: "Product" }
  );
  

  return Product;
};