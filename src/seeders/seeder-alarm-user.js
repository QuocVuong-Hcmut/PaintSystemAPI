"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // NameAlarm: DataTypes.STRING,
  // Status: DataTypes.BOOLEAN,
  // DateTime: DataTypes.DATE,
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AlarmPoints", [
      {
        NameAlarm: "Kẹt xilanh đẩy",
        Status: false,
        DateTime: new Date(),
      },
      {
        NameAlarm: "Motor chạy nhah",
        Status: true,
        DateTime: new Date(),
      },
      {
        NameAlarm: "Kẹt xilanh đẩy",
        Status: false,
        DateTime: new Date(),
      },
      {
        NameAlarm: "Motor chạy nhah",
        Status: true,
        DateTime: new Date(),
      },
      {
        NameAlarm: "Kẹt xilanh đẩy",
        Status: false,
        DateTime: new Date(),
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
