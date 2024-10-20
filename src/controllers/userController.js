const userService = require("../services/userService");

// Fungsi untuk mengambil semua pengguna
const getUsers = async (req, res) => {
  try {
    // Mengambil semua pengguna dari userService
    const users = await userService.getAllUsers();
    res.sendResponse(
      "success",
      "Users retrieved successfully",
      users,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve users",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk mengambil pengguna berdasarkan ID
const getUser = async (req, res) => {
  try {
    // Mengambil pengguna berdasarkan ID dari parameter request
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.sendResponse(
        "success",
        "User retrieved successfully",
        user,
        null,
        200
      );
    } else {
      res.sendResponse("error", "User not found", null, null, 404);
    }
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to retrieve user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk memperbarui pengguna yang sudah ada
const updateUser = async (req, res) => {
  try {
    // Mengambil ID dari parameter dan detail pengguna dari body request
    const { id } = req.params;
    const { name, email, password } = req.body;
    // Memperbarui pengguna menggunakan userService
    const user = await userService.updateUser(id, name, email, password);
    if (user) {
      res.sendResponse("success", "User updated successfully", user, null, 200);
    } else {
      res.sendResponse("error", "User not found", null, null, 404);
    }
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to update user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk menghapus pengguna berdasarkan ID
const deleteUser = async (req, res) => {
  try {
    // Menghapus pengguna berdasarkan ID
    const success = await userService.deleteUser(req.params.id);
    if (success) {
      res.sendResponse("success", "User deleted successfully", null, null, 200);
    } else {
      res.sendResponse("error", "User not found", null, null, 404);
    }
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to delete user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk mengambil pengguna berdasarkan token
const getUserByToken = async (req, res) => {
  try {
    // Mengambil pengguna berdasarkan ID yang terdapat pada token
    const user = await userService.getUserById(req.userId);
    if (!user) {
      return res.sendResponse("error", "User not found", null, null, 404);
    }
    res.sendResponse("success", "User retrieved successfully", user, null, 200);
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve user",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserByToken,
};
