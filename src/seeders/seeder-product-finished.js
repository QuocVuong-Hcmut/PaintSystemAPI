"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // CycleTime: DataTypes.FLOAT,
  // Status: DataTypes.BOOLEAN,
  // IdProduct: DataTypes.STRING,
  // Weight: DataTypes.FLOAT,
  // DateTime: DataTypes.DATE,
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("FinishedProducts", [
      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM1",
      //   Weight: 15,
      //   DateTime: new Date(),
      // },
      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date(),
      // },
      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 15,
        DateTime: new Date("2025-04-04T02:46:36.000Z"),
      },

      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 4,
        DateTime: new Date("2024-04-07T02:46:36.000Z"),
      },
      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 15,
        DateTime: new Date("2023-04-24T02:46:36.000Z"),
      },

      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 4,
        DateTime: new Date("2023-04-15T02:46:36.000Z"),
      },
      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 15,
        DateTime: new Date("2023-04-11T02:46:36.000Z"),
      },

      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 4,
        DateTime: new Date("2023-04-10T02:46:36.000Z"),
      },
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-04-05T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-04-06T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-04-07T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-04-09T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-012-08T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-11-08T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-010-08T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-09-08T02:46:36.000Z"),
      // },
      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-08-08T02:46:36.000Z"),
      // },
      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-07-08T02:46:36.000Z"),
      // },
      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-06-08T02:46:36.000Z"),
      // },
      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2023-05-08T02:46:36.000Z"),
      // },

      // {
      //   CycleTime: 15,
      //   Status: true,
      //   IdProduct: "SM2",
      //   Weight: 15,
      //   DateTime: new Date("2024-04-08T02:46:36.000Z"),
      // },
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
