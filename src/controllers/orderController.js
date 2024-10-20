const orderService = require("../services/orderService");

// Fungsi untuk membuat pesanan baru
const createOrder = async (req, res) => {
  try {
    // Mengambil table_id dan items dari body request
    const { table_id, items } = req.body;
    const user_id = req.userId; // Mengambil user_id dari token autentikasi

    // Menggunakan orderService untuk membuat pesanan
    const order = await orderService.createOrder(user_id, {
      table_id,
      items,
    });
    res.sendResponse("success", "Order created successfully", order, null, 201);
  } catch (error) {
    res.sendResponse("error", error.message, null, [error.message], 500);
  }
};

// Fungsi untuk mengambil semua pesanan
const getAllOrders = async (req, res) => {
  try {
    // Mengambil semua pesanan dari orderService
    const orders = await orderService.getAllOrders();
    res.sendResponse("success", "Orders retrieved successfully", orders);
  } catch (error) {
    res.sendResponse("error", error.message, null, [error.message], 500);
  }
};

// Fungsi untuk mengambil pesanan berdasarkan ID
const getOrderById = async (req, res) => {
  try {
    // Mengambil pesanan berdasarkan ID dari parameter request
    const order = await orderService.getOrderById(req.params.id);
    if (!order) {
      return res.sendResponse(
        "error",
        "Order not found",
        null,
        ["Order not found"],
        404
      );
    }
    res.sendResponse("success", "Order retrieved successfully", order);
  } catch (error) {
    res.sendResponse("error", error.message, null, [error.message], 500);
  }
};

// Fungsi untuk memperbarui pesanan
const updateOrder = async (req, res) => {
  try {
    // Memperbarui pesanan dengan ID dan body request
    const updatedOrder = await orderService.updateOrder(
      req.params.id,
      req.body
    );
    if (updatedOrder[0] === 0) {
      return res.sendResponse(
        "error",
        "Order not found or no changes made",
        null,
        ["Order not found or no changes made"],
        404
      );
    }
    res.sendResponse("success", "Order updated successfully", updatedOrder);
  } catch (error) {
    res.sendResponse("error", error.message, null, [error.message], 500);
  }
};

// Fungsi untuk menghapus pesanan
const deleteOrder = async (req, res) => {
  try {
    // Menghapus pesanan berdasarkan ID
    const isDeleted = await orderService.deleteOrder(req.params.id);
    if (isDeleted) {
      res.sendResponse("success", "Order deleted successfully");
    } else {
      res.sendResponse(
        "error",
        "Order not found",
        null,
        ["Order not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse("error", error.message, null, [error.message], 500);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
