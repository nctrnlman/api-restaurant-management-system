const categoryService = require("../services/categoryService");

// Fungsi untuk mengambil semua kategori
const getAllCategories = async (req, res) => {
  try {
    // Mengambil daftar kategori dari categoryService
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

// Fungsi untuk mengambil kategori berdasarkan ID
const getCategoryById = async (req, res) => {
  try {
    // Mengambil kategori berdasarkan ID dari parameter request
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

// Fungsi untuk membuat kategori baru
const createCategory = async (req, res) => {
  try {
    // Mengambil nama kategori dari request body
    const { name } = req.body;

    // Menggunakan categoryService untuk membuat kategori baru
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

// Fungsi untuk memperbarui kategori
const updateCategory = async (req, res) => {
  try {
    // Mengambil ID kategori dari parameter dan nama baru dari request body
    const { id } = req.params;
    const { name } = req.body;

    // Menggunakan categoryService untuk memperbarui kategori
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

// Fungsi untuk menghapus kategori
const deleteCategory = async (req, res) => {
  try {
    // Menggunakan categoryService untuk menghapus kategori berdasarkan ID
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
