"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Product.hasMany(finishedproduct, { foreignKey: "IdProduct" });
      // this.hasMany(models.Finishedproduct, { foreignKey: "IdProduct" });
    }
  }
  Product.init(
    {
      IdProduct: DataTypes.STRING,
      NameProduct: DataTypes.STRING,
      BreakTime: DataTypes.INTEGER,
      WashingTime: DataTypes.INTEGER,
      Type: DataTypes.STRING,
      MixingTime: DataTypes.INTEGER,
      Volume: DataTypes.INTEGER,
      Color: DataTypes.STRING,
      StandardWeight: DataTypes.INTEGER,
      Error: DataTypes.FLOAT,
      DateTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
