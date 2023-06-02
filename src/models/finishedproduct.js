"use strict";
const { Model } = require("sequelize");
const Product = require("./product");
module.exports = (sequelize, DataTypes) => {
  class FinishedProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //this.belongsTo(models.Product, { foreignKey: "IdProduct" });
    }
  }
  FinishedProduct.init(
    {
      CycleTime: DataTypes.FLOAT,
      Status: DataTypes.BOOLEAN,
      IdProduct: DataTypes.STRING,
      Weight: DataTypes.FLOAT,
      DateTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "FinishedProduct",
      tableName: "FinishedProducts",
      timestamps: false,
    }
  );

  return FinishedProduct;
};
