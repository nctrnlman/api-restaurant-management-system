const express = require("express");
const router = express.Router();
const {
  getTables,
  getTable,
  createTable,
  updateTable,
  deleteTable,
} = require("../controllers/tableController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", getTables);
router.get("/:id", authMiddleware, getTable);
router.post("/", authMiddleware, createTable);
router.put("/:id", authMiddleware, updateTable);
router.delete("/:id", authMiddleware, deleteTable);

module.exports = router;
