const orderRepository = require("../repositories/orderRepository");
const orderDetailRepository = require("../repositories/orderDetailRepository");

const createOrder = async (user_id, orderData) => {
  return await orderRepository.createOrder(user_id, orderData);
};

const getAllOrders = async () => {
  return await orderRepository.findAllOrders();
};

const getOrderById = async (id) => {
  return await orderRepository.findOrderById(id);
};

const updateOrder = async (id, updateData) => {
  return await orderRepository.updateOrder(id, updateData);
};

const deleteOrder = async (id) => {
  return await orderRepository.deleteOrder(id);
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
