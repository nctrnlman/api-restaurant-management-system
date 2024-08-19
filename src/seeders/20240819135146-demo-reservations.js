"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Reservations", [
      {
        table_id: 1,
        customer_name: "John Doe",
        status: "reserved",
        pax: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        table_id: 2,
        customer_name: "Jane Smith",
        status: "available",
        pax: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};
