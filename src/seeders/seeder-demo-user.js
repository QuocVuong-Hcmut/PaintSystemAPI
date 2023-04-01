"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // fullName: DataTypes.STRING,
  // userName: DataTypes.STRING,
  // password: DataTypes.STRING,
  // phoneNumber: DataTypes.INTEGER,
  // admin: DataTypes.BOOLEAN,
  // dateTime: DataTypes.DATE
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        FullName: "QuocVuong",
        Address: "Binh Dinh",
        Password: "123456",
        UserName: "admin123",
        PhoneNumber: 21,
        Admin: true,
        PhoneNumber: 397788624,
        DateTime: null,
      },
      {
        FullName: "ThanhDat",
        Address: "Binh Dinh",
        Password: "12345",
        UserName: "dat123",
        PhoneNumber: 21,
        Admin: false,
        PhoneNumber: 397788624,
        DateTime: null,
      },
      {
        FullName: "QuocDung",
        Address: "Binh Dinh",
        Password: "dung123",
        UserName: 1,
        PhoneNumber: 21,
        Admin: false,
        PhoneNumber: 397788624,
        DateTime: null,
      },
      {
        FullName: "QuocPhuong",
        Address: "Binh Dinh",
        Password: "123456",
        UserName: "admin1234",
        PhoneNumber: 21,
        Admin: true,
        PhoneNumber: 397788624,
        DateTime: null,
      },
      {
        FullName: "ThanhDat",
        Address: "Binh Dinh",
        Password: "12345",
        UserName: "dat12345",
        PhoneNumber: 21,
        Admin: false,
        PhoneNumber: 397788624,
        DateTime: null,
      },
      {
        FullName: "QuocDung",
        Address: "Binh Dinh",
        Password: "dung12345",
        UserName: 1,
        PhoneNumber: 21,
        Admin: false,
        PhoneNumber: 397788624,
        DateTime: null,
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
