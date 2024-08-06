"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Fish & Chips",
        product_price: "49900",
        category_id: 1,
        description: "Fish whit chips and tartart sauce",
        product_image: "https://example.com/images/casual-outfit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Fried Rice",
        product_price: "149000",
        category_id: 2,
        description: "Indonesian Fried Rice with Eggs",
        product_image: "https://example.com/images/formal-suit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Es Mambo",
        product_price: "79900",
        category_id: 3,
        description: "Es seger",
        product_image: "https://example.com/images/summer-dress.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
