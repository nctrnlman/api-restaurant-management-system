module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("orderdetails", [
      {
        order_id: 1,
        product_id: 1,
        quantity: 2,
        product_price: "10000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        product_id: 2,
        quantity: 1,
        product_price: "15000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 3,
        quantity: 1,
        product_price: "15000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderdetails", null, {});
  },
};
