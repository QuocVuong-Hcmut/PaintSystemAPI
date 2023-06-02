"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reports", [
      {
        IdProduct: "SM1",
        Quantity: 45,
        ProductError: 2,
        RunTime: 15,
        ScheduleTime: 24,
        UserId: "QV",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 45,
        ProductError: 5,
        RunTime: 25,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM2",
        Quantity: 28,
        ProductError: 4,
        RunTime: 25,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 71,
        ProductError: 13,
        RunTime: 29,
        ScheduleTime: 30,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM2",
        Quantity: 28,
        ProductError: 4,
        RunTime: 78,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
        UserId: "s",
        DateTime: new Date(),
      },
      {
        IdProduct: "SM1",
        Quantity: 28,
        ProductError: 4,
        RunTime: 28,
        ScheduleTime: 28,
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
