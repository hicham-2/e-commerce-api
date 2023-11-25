const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Promo extends Model {
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

  Promo.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      description: DataTypes.TEXT,
      discount_rate: DataTypes.DECIMAL,
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      productID: DataTypes.INTEGER,
      // Additional fields as necessary
    },
    { sequelize, modelName: "promo" }
  );
  
  

  return Promo;
};
