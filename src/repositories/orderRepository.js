const {
  Order,
  OrderDetail,
  Reservation,
  Product,
  Table,
  User,
} = require("../models");
const orderDetailRepository = require("./orderDetailRepository");

// Fungsi untuk membuat pesanan baru
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

  // Hitung total harga berdasarkan item dalam pesanan
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

// Fungsi untuk menemukan semua pesanan
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

// Fungsi untuk menemukan pesanan berdasarkan ID
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

// Fungsi untuk memperbarui pesanan
const updateOrder = async (id, updateData) => {
  return await Order.update(updateData, { where: { id } });
};

// Fungsi untuk menghapus pesanan
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
