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
        CycleTime: 12,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2025-04-04T02:46:36.000Z"),
      },

      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 22,
        DateTime: new Date("2024-04-07T02:47:36.000Z"),
      },
      {
        CycleTime: 14,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2023-04-24T02:48:36.000Z"),
      },

      {
        CycleTime: 16,
        Status: true,
        IdProduct: "SM2",
        Weight: 20,
        DateTime: new Date("2023-04-15T02:49:36.000Z"),
      },
      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2023-04-11T02:56:36.000Z"),
      },

      {
        CycleTime: 14,
        Status: true,
        IdProduct: "SM2",
        Weight: 20,
        DateTime: new Date("2023-04-10T03:46:36.000Z"),
      },

      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2023-04-10T04:46:36.000Z"),
      },

      {
        CycleTime: 16,
        Status: true,
        IdProduct: "SM2",
        Weight: 23,
        DateTime: new Date("2023-04-10T07:46:36.000Z"),
      },
      {
        CycleTime: 25,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2023-04-10T08:46:36.000Z"),
      },
      {
        CycleTime: 21,
        Status: true,
        IdProduct: "SM2",
        Weight: 22,
        DateTime: new Date("2023-04-10T09:46:36.000Z"),
      },
      {
        CycleTime: 16,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2023-04-10T10:46:36.000Z"),
      },
      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2023-04-10T02:47:36.000Z"),
      },
      {
        CycleTime: 14,
        Status: true,
        IdProduct: "SM2",
        Weight: 20,
        DateTime: new Date("2023-04-10T02:55:36.000Z"),
      },
      {
        CycleTime: 13,
        Status: true,
        IdProduct: "SM2",
        Weight: 23,
        DateTime: new Date("2023-04-10T06:46:36.000Z"),
      },

      {
        CycleTime: 15,
        Status: true,
        IdProduct: "SM2",
        Weight: 21,
        DateTime: new Date("2023-04-10T01:46:36.000Z"),
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
