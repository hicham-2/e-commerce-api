const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alert extends Model {
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

  Alert.init(
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
      type: DataTypes.STRING, // e.g., 'New Product', 'Restock', 'Price Change'
      isEnabled: DataTypes.BOOLEAN,
      // Additional fields as necessary
    },
    { sequelize, modelName: "Alert" }
  );

  return Alert;
};
