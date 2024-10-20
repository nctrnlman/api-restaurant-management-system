const db = require("../models");
const Table = db.Table;

// Fungsi untuk membuat tabel baru
const createTable = async (tableData) => {
  return await Table.create(tableData);
};

// Fungsi untuk menemukan tabel berdasarkan ID
const findTableById = async (id) => {
  return await Table.findByPk(id);
};

// Fungsi untuk mengambil semua tabel
const findAllTables = async () => {
  return await Table.findAll({
    order: [["table_name", "ASC"]],
  });
};

// Fungsi untuk memperbarui tabel berdasarkan ID
const updateTable = async (id, tableData) => {
  const table = await Table.findByPk(id);
  if (table) {
    return await table.update(tableData);
  }
  return null;
};

// Fungsi untuk menghapus tabel berdasarkan ID
const deleteTable = async (id) => {
  const table = await Table.findByPk(id);
  if (table) {
    await table.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createTable,
  findTableById,
  findAllTables,
  updateTable,
  deleteTable,
};
