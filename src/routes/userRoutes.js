const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserByToken,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, getUsers);
router.get("/token", authMiddleware, getUserByToken);
router.get("/:id", authMiddleware, getUser);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
