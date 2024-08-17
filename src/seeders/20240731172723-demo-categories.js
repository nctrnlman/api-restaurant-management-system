"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", [
      {
        category_name: "Appetizers",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Main Courses",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Desserts",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Beverages",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Specials",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vegetarian",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Seafood",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Meat Dishes",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Salads",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Soups",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Breakfast",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Lunch",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Dinner",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Healthy Choices",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Kids Menu",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Gluten-Free",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vegan",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Traditional",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Fusion",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Gourmet",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Seasonal",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
