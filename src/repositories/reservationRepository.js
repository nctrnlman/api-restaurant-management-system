const db = require("../models");
const Reservation = db.Reservation;

const createReservation = async (reservationData) => {
  return await Reservation.create(reservationData);
};

const findReservationById = async (id) => {
  return await Reservation.findByPk(id, {
    include: ["table"],
  });
};

const findAllReservations = async () => {
  return await Reservation.findAll({
    include: ["table"],
    order: [["createdAt", "DESC"]],
  });
};

const updateReservation = async (id, reservationData) => {
  const reservation = await Reservation.findByPk(id);
  if (reservation) {
    return await reservation.update(reservationData);
  }
  return null;
};

const deleteReservation = async (id) => {
  const reservation = await Reservation.findByPk(id);
  if (reservation) {
    await reservation.destroy();
    return true;
  }
  return false;
};

const findReservedReservations = async () => {
  return await Reservation.findAll({
    where: {
      status: "reserved",
    },
  });
};

module.exports = {
  createReservation,
  findReservationById,
  findAllReservations,
  updateReservation,
  deleteReservation,
  findReservedReservations,
};
