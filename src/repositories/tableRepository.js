const db = require("../models");
const Table = db.Table;

const createTable = async (tableData) => {
  return await Table.create(tableData);
};

const findTableById = async (id) => {
  return await Table.findByPk(id);
};

const findAllTables = async () => {
  return await Table.findAll({
    order: [["table_name", "ASC"]],
  });
};

const updateTable = async (id, tableData) => {
  const table = await Table.findByPk(id);
  if (table) {
    return await table.update(tableData);
  }
  return null;
};

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
