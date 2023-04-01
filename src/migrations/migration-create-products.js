"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // nameProduct: DataTypes.STRING,
    // breakTime: DataTypes.FLOAT,
    // type: DataTypes.STRING,
    // mixingTime: DataTypes.FLOAT,
    // volume: DataTypes.INTEGER,
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdProduct: {
        type: Sequelize.STRING,
      },

      NameProduct: {
        type: Sequelize.STRING,
      },
      BreakTime: {
        type: Sequelize.INTEGER,
      },
      WashingTime: {
        type: Sequelize.INTEGER,
      },
      Type: {
        type: Sequelize.STRING,
      },
      MixingTime: {
        type: Sequelize.INTEGER,
      },
      Volume: {
        type: Sequelize.INTEGER,
      },
      Color: {
        type: Sequelize.STRING,
      },
      StandardWeight: {
        type: Sequelize.FLOAT,
      },
      Error: {
        type: Sequelize.FLOAT,
      },
      DateTime: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
