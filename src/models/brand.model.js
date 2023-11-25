const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
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

  Brand.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      websiteURL: DataTypes.STRING,
    },
    { sequelize, modelName: "Brand" }
  );

  return Brand;
};

