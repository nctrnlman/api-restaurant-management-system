"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Tables", [
      {
        table_name: "Table 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        table_name: "Table 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tables", null, {});
  },
};
