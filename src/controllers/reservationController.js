const reservationService = require("../services/reservationService");

// Fungsi untuk mengambil semua reservasi
const getReservations = async (req, res) => {
  try {
    // Mengambil semua reservasi dari reservationService
    const reservations = await reservationService.getAllReservations();
    res.sendResponse(
      "success",
      "Reservations retrieved successfully",
      reservations,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve reservations",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk mengambil reservasi berdasarkan ID
const getReservation = async (req, res) => {
  try {
    // Mengambil reservasi berdasarkan ID dari parameter request
    const reservation = await reservationService.getReservationById(
      req.params.id
    );
    if (reservation) {
      res.sendResponse(
        "success",
        "Reservation retrieved successfully",
        reservation,
        null,
        200
      );
    } else {
      res.sendResponse(
        "error",
        "Reservation not found",
        null,
        ["Reservation not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve reservation",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk membuat reservasi baru
const createReservation = async (req, res) => {
  try {
    // Mengambil data reservasi dari body request
    const newReservation = await reservationService.createReservation(
      req.body.table_id,
      req.body.customer_name,
      req.body.status,
      req.body.pax
    );
    res.sendResponse(
      "success",
      "Reservation created successfully",
      newReservation,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create reservation",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk memperbarui reservasi yang sudah ada
const updateReservation = async (req, res) => {
  try {
    // Memperbarui reservasi dengan ID dan data baru
    const updatedReservation = await reservationService.updateReservation(
      req.params.id,
      req.body.table_id,
      req.body.customer_name,
      req.body.status,
      req.body.pax
    );
    if (updatedReservation) {
      res.sendResponse(
        "success",
        "Reservation updated successfully",
        updatedReservation,
        null,
        200
      );
    } else {
      res.sendResponse(
        "error",
        "Reservation not found",
        null,
        ["Reservation not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update reservation",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk menghapus reservasi berdasarkan ID
const deleteReservation = async (req, res) => {
  try {
    // Menghapus reservasi berdasarkan ID
    const isDeleted = await reservationService.deleteReservation(req.params.id);
    if (isDeleted) {
      res.sendResponse(
        "success",
        "Reservation deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse(
        "error",
        "Reservation not found",
        null,
        ["Reservation not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete reservation",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk mengubah status reservasi menjadi tersedia
const makeAvailable = async (req, res) => {
  try {
    // Mengupdate status reservasi menjadi 'available'
    const updatedReservation = await reservationService.updateReservationStatus(
      req.params.id,
      "available"
    );
    if (updatedReservation) {
      res.sendResponse(
        "success",
        "Reservation status updated to available successfully",
        updatedReservation,
        null,
        200
      );
    } else {
      res.sendResponse(
        "error",
        "Reservation not found",
        null,
        ["Reservation not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update reservation status",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getReservations,
  getReservation,
  createReservation,
  updateReservation,
  deleteReservation,
  makeAvailable,
};
