const db = require("../models");
const Category = db.Category;

const getAllCategories = () => Category.findAll();

const getCategoryById = (id) => Category.findByPk(id);

const createCategory = (data) => Category.create(data);

const updateCategoryById = (id, data) =>
  Category.findByPk(id).then((category) => {
    if (category) {
      return category.update(data);
    }
    return null;
  });

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
