const { OrderDetail } = require("../models");

// Fungsi untuk membuat detail pesanan baru
const createOrderDetail = async (orderDetailData) => {
  return await OrderDetail.create(orderDetailData);
};

// Fungsi untuk menemukan detail pesanan berdasarkan ID pesanan
const findOrderDetailsByOrderId = async (order_id) => {
  return await OrderDetail.findAll({ where: { order_id } });
};

module.exports = {
  createOrderDetail,
  findOrderDetailsByOrderId,
};
