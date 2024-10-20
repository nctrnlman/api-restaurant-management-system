const reservationRepository = require("../repositories/reservationRepository");

// Membuat reservasi baru
const createReservation = async (table_id, customer_name, status, pax) => {
  return await reservationRepository.createReservation({
    table_id,
    customer_name,
    status,
    pax,
  });
};

// Mengambil reservasi berdasarkan ID
const getReservationById = async (id) => {
  return await reservationRepository.findReservationById(id);
};

// Mengambil semua reservasi
const getAllReservations = async () => {
  return await reservationRepository.findAllReservations();
};

// Memperbarui reservasi berdasarkan ID
const updateReservation = async (id, table_id, customer_name, status, pax) => {
  return await reservationRepository.updateReservation(id, {
    table_id,
    customer_name,
    status,
    pax,
  });
};

// Memperbarui status reservasi
const updateReservationStatus = async (id, status) => {
  return await reservationRepository.updateReservation(id, { status });
};

// Menghapus reservasi berdasarkan ID
const deleteReservation = async (id) => {
  return await reservationRepository.deleteReservation(id);
};

module.exports = {
  createReservation,
  getReservationById,
  getAllReservations,
  updateReservation,
  deleteReservation,
  updateReservationStatus,
};
