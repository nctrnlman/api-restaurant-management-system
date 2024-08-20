const { OrderDetail } = require("../models");

const createOrderDetail = async (orderDetailData) => {
  return await OrderDetail.create(orderDetailData);
};

const findOrderDetailsByOrderId = async (order_id) => {
  return await OrderDetail.findAll({ where: { order_id } });
};

module.exports = {
  createOrderDetail,
  findOrderDetailsByOrderId,
};
