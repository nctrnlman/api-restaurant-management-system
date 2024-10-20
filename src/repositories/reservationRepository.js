const db = require("../models");
const Reservation = db.Reservation;

// Fungsi untuk membuat reservasi baru
const createReservation = async (reservationData) => {
  return await Reservation.create(reservationData);
};

// Fungsi untuk menemukan reservasi berdasarkan ID
const findReservationById = async (id) => {
  return await Reservation.findByPk(id, {
    include: ["table"],
  });
};

// Fungsi untuk mengambil semua reservasi
const findAllReservations = async () => {
  return await Reservation.findAll({
    include: ["table"],
    order: [["createdAt", "DESC"]],
  });
};

// Fungsi untuk memperbarui reservasi berdasarkan ID
const updateReservation = async (id, reservationData) => {
  const reservation = await Reservation.findByPk(id);
  if (reservation) {
    return await reservation.update(reservationData);
  }
  return null;
};

// Fungsi untuk menghapus reservasi berdasarkan ID
const deleteReservation = async (id) => {
  const reservation = await Reservation.findByPk(id);
  if (reservation) {
    await reservation.destroy();
    return true;
  }
  return false;
};

// Fungsi untuk menemukan semua reservasi yang berstatus 'reserved'
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
