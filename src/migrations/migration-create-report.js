"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Quantity: {
        type: Sequelize.INTEGER,
      },
      IdProduct: {
        type: Sequelize.STRING,
      },
      ProductError: {
        type: Sequelize.INTEGER,
      },
      RunTime: {
        type: Sequelize.FLOAT,
      },
      ScheduleTime: {
        type: Sequelize.FLOAT,
      },
      UserId: {
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
