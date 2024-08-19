const reservationRepository = require("../repositories/reservationRepository");

const createReservation = async (table_id, customer_name, status, pax) => {
  return await reservationRepository.createReservation({
    table_id,
    customer_name,
    status,
    pax,
  });
};

const getReservationById = async (id) => {
  return await reservationRepository.findReservationById(id);
};

const getAllReservations = async () => {
  return await reservationRepository.findAllReservations();
};

const updateReservation = async (id, table_id, customer_name, status, pax) => {
  return await reservationRepository.updateReservation(id, {
    table_id,
    customer_name,
    status,
    pax,
  });
};

const updateReservationStatus = async (id, status) => {
  return await reservationRepository.updateReservation(id, { status });
};

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
