const db = require("../models");
const Category = db.Category;

// Mengambil semua kategori
const getAllCategories = () => Category.findAll();

// Mengambil kategori berdasarkan ID
const getCategoryById = (id) => Category.findByPk(id);

// Membuat kategori baru
const createCategory = (data) => Category.create(data);

// Memperbarui kategori berdasarkan ID
const updateCategoryById = (id, data) =>
  Category.findByPk(id).then((category) => {
    if (category) {
      return category.update(data);
    }
    return null;
  });

// Menghapus kategori berdasarkan ID
const deleteCategoryById = (id) =>
  Category.findByPk(id).then((category) => {
    if (category) {
      return category.destroy();
    }
    return null;
  });

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
