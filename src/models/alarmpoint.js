"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AlarmPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AlarmPoint.init(
    {
      NameAlarm: DataTypes.STRING,
      Status: DataTypes.BOOLEAN,
      DateTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "AlarmPoint",
    }
  );
  return AlarmPoint;
};
