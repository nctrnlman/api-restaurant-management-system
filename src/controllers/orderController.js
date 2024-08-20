const orderService = require("../services/orderService");

const createOrder = async (req, res) => {
  try {
    const { reservation_id, items } = req.body;
    const user_id = req.userId;
    const order = await orderService.createOrder(user_id, {
      reservation_id,
      items,
    });
    res.sendResponse("success", "Order created successfully", order, null, 201);
  } catch (error) {
    res.sendResponse("error", error.message, null, [error.message], 500);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.sendResponse("success", "Orders retrieved successfully", orders);
  } catch (error) {
    res.sendResponse("error", error.message, null, [error.message], 500);
  }
};

const getOrderById = async (req, res) => {
  try {
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

const updateOrder = async (req, res) => {
  try {
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

const deleteOrder = async (req, res) => {
  try {
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
