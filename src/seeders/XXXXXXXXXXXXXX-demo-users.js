"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash("password", 10);

      // Insert demo users
      await queryInterface.bulkInsert(
        "Users",
        [
          {
            name: "John Doe",
            email: "john.doe@example.com", // Unique email
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Jane Doe",
            email: "jane.doe@example.com", // Unique email
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    } catch (error) {
      console.error("Error seeding data:", error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      // Delete seeded users
      await queryInterface.bulkDelete("Users", null, {});
    } catch (error) {
      console.error("Error deleting seeded data:", error);
    }
  },
};
