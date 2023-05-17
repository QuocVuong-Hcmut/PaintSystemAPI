"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reports", [
      {
        IdProduct: "SM1",
        Quantity: true,
        ProductError: 2,
        RunTime: 15,
        ScheduleTime: 15,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: true,
        ProductError: 5,
        RunTime: 15,
        ScheduleTime: 15,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: true,
        ProductError: 4,
        RunTime: 15,
        ScheduleTime: 15,
        UserId: "s",
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
