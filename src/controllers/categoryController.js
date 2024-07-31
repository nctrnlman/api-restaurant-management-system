const categoryService = require("../services/categoryService");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.sendResponse(
      "success",
      "Categories retrieved successfully",
      categories,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve categories",
      null,
      [error.message],
      500
    );
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategory(req.params.id);
    if (category) {
      res.sendResponse(
        "success",
        "Category retrieved successfully",
        category,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Category not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve category",
      null,
      [error.message],
      500
    );
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryService.createCategory(name);
    res.sendResponse(
      "success",
      "Category created successfully",
      category,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create category",
      null,
      [error.message],
      500
    );
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await categoryService.updateCategory(id, name);
    if (category) {
      res.sendResponse(
        "success",
        "Category updated successfully",
        category,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Category not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update category",
      null,
      [error.message],
      500
    );
  }
};

const deleteCategory = async (req, res) => {
  try {
    const success = await categoryService.deleteCategory(req.params.id);
    if (success) {
      res.sendResponse(
        "success",
        "Category deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Category not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete category",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
