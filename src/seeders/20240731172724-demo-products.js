"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Casual Outfit",
        product_price: "49900",
        category_id: 1,
        description: "Stylish casual outfit suitable for everyday wear.",
        product_image: "https://example.com/images/casual-outfit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Formal Suit",
        product_price: "149000",
        category_id: 2,
        description: "Elegant formal suit for special occasions.",
        product_image: "https://example.com/images/formal-suit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Summer Dress",
        product_price: "79900",
        category_id: 3,
        description: "Lightweight summer dress perfect for warm weather.",
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
