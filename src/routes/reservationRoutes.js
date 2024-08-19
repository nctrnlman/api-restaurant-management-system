const express = require("express");
const router = express.Router();
const {
  getReservations,
  getReservation,
  createReservation,
  updateReservation,
  deleteReservation,
  makeAvailable,
} = require("../controllers/reservationController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, getReservations);
router.get("/:id", authMiddleware, getReservation);
router.post("/", authMiddleware, createReservation);
router.put("/:id", authMiddleware, updateReservation);
router.delete("/:id", authMiddleware, deleteReservation);
router.put("/:id/available", authMiddleware, makeAvailable);

module.exports = router;
