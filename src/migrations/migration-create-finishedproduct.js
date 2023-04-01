"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // cycleTime: DataTypes.FLOAT,
    // status: DataTypes.BOOLEAN,
    // idProduct: DataTypes.FLOAT,
    // weight: DataTypes.FLOAT,
    // dateTime: DataTypes.DATE
    await queryInterface.createTable("FinishedProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CycleTime: {
        type: Sequelize.FLOAT,
      },
      Status: {
        type: Sequelize.BOOLEAN,
      },
      IdProduct: {
        type: Sequelize.STRING,
      },
      Weight: {
        type: Sequelize.FLOAT,
      },
      DateTime: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FinishedProducts");
  },
};
