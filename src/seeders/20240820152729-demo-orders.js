module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("orders", [
      {
        user_id: 1,
        total_price: "25000",
        status: "completed",
        reservation_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        total_price: "15000",
        status: "pending",
        reservation_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
