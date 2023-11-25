import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/config.js";

class Promo extends Model {}

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

export default Promo;
