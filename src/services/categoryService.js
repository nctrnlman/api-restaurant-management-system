const categoryRepository = require("../repositories/categoryRepository");

const getCategories = () => categoryRepository.getAllCategories();

const getCategory = (id) => categoryRepository.getCategoryById(id);

const createCategory = (data) => categoryRepository.createCategory(data);

const updateCategory = (id, data) =>
  categoryRepository.updateCategoryById(id, data);

const deleteCategory = (id) => categoryRepository.deleteCategoryById(id);

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
