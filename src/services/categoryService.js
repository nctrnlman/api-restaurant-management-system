const categoryRepository = require("../repositories/categoryRepository");

// Mendapatkan semua kategori
const getCategories = () => categoryRepository.getAllCategories();

// Mendapatkan kategori berdasarkan ID
const getCategory = (id) => categoryRepository.getCategoryById(id);

// Membuat kategori baru
const createCategory = (data) => categoryRepository.createCategory(data);

// Memperbarui kategori berdasarkan ID
const updateCategory = (id, data) =>
  categoryRepository.updateCategoryById(id, data);

// Menghapus kategori berdasarkan ID
const deleteCategory = (id) => categoryRepository.deleteCategoryById(id);

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
