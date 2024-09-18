const tableRepository = require("../repositories/tableRepository");
const reservationRepository = require("../repositories/reservationRepository");
const createTable = async (table_name) => {
  return await tableRepository.createTable({ table_name });
};

const getTableById = async (id) => {
  return await tableRepository.findTableById(id);
};
const getAllTables = async () => {
  const tables = await tableRepository.findAllTables();

  const tableData = tables.map((table) => table.toJSON());

  const reservedReservations =
    await reservationRepository.findReservedReservations();

  const reservationData = reservedReservations.map((res) => res.toJSON());

  const tablesWithReservations = tableData.map((table) => {
    const reservation = reservationData.find(
      (res) => res.table_id === table.id
    );
    return {
      id: table.id,
      tableName: table.table_name,
      createdAt: table.createdAt,
      updatedAt: table.updatedAt,
      reservation: reservation ? { ...reservation, status: "reserved" } : null,
    };
  });

  return tablesWithReservations;
};

const updateTable = async (id, table_name) => {
  return await tableRepository.updateTable(id, { table_name });
};

const deleteTable = async (id) => {
  return await tableRepository.deleteTable(id);
};

module.exports = {
  createTable,
  getTableById,
  getAllTables,
  updateTable,
  deleteTable,
};