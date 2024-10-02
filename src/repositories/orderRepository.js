const {
  Order,
  OrderDetail,
  Reservation,
  Product,
  Table,
  User,
} = require("../models");
const orderDetailRepository = require("./orderDetailRepository");

const createOrder = async (user_id, orderData) => {
  const { table_id, items } = orderData;

  if (!items || items.length === 0) {
    throw new Error("Order items are required");
  }

  // const existingReservation = await Reservation.findOne({
  //   where: { table_id },
  //   order: [["createdAt", "DESC"]],
  // });

  // if (existingReservation.dataValues.status !== "available") {
  //   throw new Error("Table is already reserved. Please choose another table.");
  // }

  // const newReservation = await Reservation.create({
  //   table_id,
  //   customer_name: "customer",
  //   status: "reserved",
  //   pax: 1,
  // });

  const total_price = items
    .reduce(
      (total, item) => total + item.quantity * parseInt(item.product_price),
      0
    )
    .toString();

  const order = await Order.create({
    user_id,
    total_price,
    status: "completed",
    table_id,
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

const findAllOrders = async () => {
  return await Order.findAll({
    include: [
      {
        model: OrderDetail,
        as: "orderDetails",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
      {
        model: Table,
        as: "table",
      },
      {
        model: User,
        as: "user",
      },
    ],
    order: [["createdAt", "DESC"]],
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
      {
        model: Table,
        as: "table",
      },
      {
        model: User,
        as: "user",
      },
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
