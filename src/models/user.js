"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //User.belongsTo(models.Article, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      FullName: DataTypes.STRING,
      Address: DataTypes.STRING,
      UserName: DataTypes.STRING,
      Password: DataTypes.STRING,
      PhoneNumber: DataTypes.INTEGER,
      Admin: DataTypes.BOOLEAN,
      DateTime: DataTypes.DATE, // dc rồi đó cô nươngg
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: false,
    }
  );
  return User;
};
