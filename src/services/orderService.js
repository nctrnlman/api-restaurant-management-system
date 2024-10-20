const orderRepository = require("../repositories/orderRepository");
const orderDetailRepository = require("../repositories/orderDetailRepository");

// Membuat pesanan baru
const createOrder = async (user_id, orderData) => {
  return await orderRepository.createOrder(user_id, orderData);
};

// Mengambil semua pesanan
const getAllOrders = async () => {
  return await orderRepository.findAllOrders();
};

// Mengambil pesanan berdasarkan ID
const getOrderById = async (id) => {
  return await orderRepository.findOrderById(id);
};

// Memperbarui pesanan berdasarkan ID
const updateOrder = async (id, updateData) => {
  return await orderRepository.updateOrder(id, updateData);
};

// Menghapus pesanan berdasarkan ID
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
