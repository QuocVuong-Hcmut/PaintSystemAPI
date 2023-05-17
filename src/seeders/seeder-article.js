"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // NameAlarm: DataTypes.STRING,
  // Status: DataTypes.BOOLEAN,
  // DateTime: DataTypes.DATE,
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Articles", [
      {
        Content: "Kẹt xilanh đẩy",
        UserId: 1,
      },
      {
        
        Content: "Kẹt xilanh đẩy",
        UserId: 2,
      },
      {
        Content: "Kẹt xilanh đẩy",
        UserId: 2,
      },
      {
        Content: "Kẹt xilanh đẩy",
        UserId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
