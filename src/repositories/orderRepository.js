const { Order, OrderDetail, Reservation, Product } = require("../models");

const createOrder = async (orderData) => {
  return await Order.create(orderData);
};

const findAllOrders = async () => {
  return await Order.findAll({
    include: [
      {
        model: OrderDetail,
        as: "orderDetails",
        include: [{ model: Product, as: "product" }],
      },
      { model: Reservation, as: "reservation" },
    ],
  });
};

const findOrderById = async (id) => {
  return await Order.findByPk(id, {
    include: [
      {
        model: OrderDetail,
        as: "orderDetails",
        include: [{ model: Product, as: "product" }],
      },
      { model: Reservation, as: "reservation" },
    ],
  });
};

const updateOrder = async (id, updateData) => {
  return await Order.update(updateData, { where: { id } });
};

const deleteOrder = async (id) => {
  return await Order.destroy({ where: { id } });
};

module.exports = {
  createOrder,
  findAllOrders,
  findOrderById,
  updateOrder,
  deleteOrder,
};
