"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", [
      {
        category_name: "Outfit",
        category_image: "https://example.com/images/outfit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Formal Wear",
        category_image: "https://example.com/images/formal-wear.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Summer Collection",
        category_image: "https://example.com/images/summer-collection.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
