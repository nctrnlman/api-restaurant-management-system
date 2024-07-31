const db = require("../models");
const Product = db.Product;

const getAllProducts = () => Product.findAll({ include: ["Category"] });

const getProductById = (id) => Product.findByPk(id, { include: ["Category"] });

const createProduct = (data) => Product.create(data);

const updateProductById = (id, data) =>
  Product.findByPk(id).then((product) => {
    if (product) {
      return product.update(data);
    }
    return null;
  });

const deleteProductById = (id) =>
  Product.findByPk(id).then((product) => {
    if (product) {
      return product.destroy();
    }
    return null;
  });

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
