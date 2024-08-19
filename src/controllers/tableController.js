const tableService = require("../services/tableService");

const getTables = async (req, res) => {
  try {
    const tables = await tableService.getAllTables();
    res.sendResponse(
      "success",
      "Tables retrieved successfully",
      tables,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve tables",
      null,
      [error.message],
      500
    );
  }
};

const getTable = async (req, res) => {
  try {
    const table = await tableService.getTableById(req.params.id);
    if (table) {
      res.sendResponse(
        "success",
        "Table retrieved successfully",
        table,
        null,
        200
      );
    } else {
      res.sendResponse(
        "error",
        "Table not found",
        null,
        ["Table not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve table",
      null,
      [error.message],
      500
    );
  }
};

const createTable = async (req, res) => {
  try {
    const newTable = await tableService.createTable(req.body.table_name);
    res.sendResponse(
      "success",
      "Table created successfully",
      newTable,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create table",
      null,
      [error.message],
      500
    );
  }
};

const updateTable = async (req, res) => {
  try {
    const updatedTable = await tableService.updateTable(
      req.params.id,
      req.body.table_name
    );
    if (updatedTable) {
      res.sendResponse(
        "success",
        "Table updated successfully",
        updatedTable,
        null,
        200
      );
    } else {
      res.sendResponse(
        "error",
        "Table not found",
        null,
        ["Table not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update table",
      null,
      [error.message],
      500
    );
  }
};

const deleteTable = async (req, res) => {
  try {
    const isDeleted = await tableService.deleteTable(req.params.id);
    if (isDeleted) {
      res.sendResponse(
        "success",
        "Table deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse(
        "error",
        "Table not found",
        null,
        ["Table not found"],
        404
      );
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete table",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getTables,
  getTable,
  createTable,
  updateTable,
  deleteTable,
};
