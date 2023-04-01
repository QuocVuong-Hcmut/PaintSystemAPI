"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // idProduct: DataTypes.STRING,
    // Number: DataTypes.INT,
    // ProductError: DataTypes.FLOAT,
    // StaffId: DataTypes.STRING,
    // dateTime: DataTypes.DATE
    await queryInterface.createTable("Reports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdProduct: {
        type: Sequelize.STRING,
      },
      Number: {
        type: Sequelize.INTEGER,
      },
      ProductError: {
        type: Sequelize.FLOAT,
      },
      StaffId: {
        type: Sequelize.STRING,
      },
      DateTime: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reports");
  },
};
