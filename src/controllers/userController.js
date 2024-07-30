const userService = require("../services/userService");

const getUsers = async (req, res) => {
  try {
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

const getUser = async (req, res) => {
  try {
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

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
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

const deleteUser = async (req, res) => {
  try {
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

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
