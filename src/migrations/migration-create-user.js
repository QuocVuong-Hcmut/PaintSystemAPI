"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // fullName: DataTypes.STRING,
    // userName: DataTypes.STRING,
    // password: DataTypes.STRING,
    // phoneNumber: DataTypes.INTEGER,
    // admin: DataTypes.BOOL
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FullName: {
        type: Sequelize.STRING,
      },
      Address: {
        type: Sequelize.STRING,
      },
      UserName: {
        type: Sequelize.STRING,
      },
      Password: {
        type: Sequelize.STRING,
      },
      PhoneNumber: {
        type: Sequelize.INTEGER,
      },
      Admin: {
        type: Sequelize.BOOLEAN,
      },
      DateTime: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
