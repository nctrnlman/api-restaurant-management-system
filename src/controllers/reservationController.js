const reservationService = require("../services/reservationService");

const getReservations = async (req, res) => {
  try {
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

const getReservation = async (req, res) => {
  try {
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

const createReservation = async (req, res) => {
  try {
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

const updateReservation = async (req, res) => {
  try {
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

const deleteReservation = async (req, res) => {
  try {
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

const makeAvailable = async (req, res) => {
  try {
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
