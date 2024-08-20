const orderRepository = require("../repositories/orderRepository");
const orderDetailRepository = require("../repositories/orderDetailRepository");

const createOrder = async (user_id, orderData) => {
  const { reservation_id = null, items } = orderData;

  if (!items || items.length === 0) {
    throw new Error("Order items are required");
  }

  const total_price = items
    .reduce(
      (total, item) => total + item.quantity * parseInt(item.product_price),
      0
    )
    .toString();

  const order = await orderRepository.createOrder({
    user_id,
    total_price,
    status: "completed",
    reservation_id,
  });

  for (const item of items) {
    await orderDetailRepository.createOrderDetail({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      product_price: item.product_price,
    });
  }

  return order;
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
