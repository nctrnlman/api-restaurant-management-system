const db = require("../models");
const { Op } = require("sequelize");
const Product = db.Product;

const getAllProducts = (categoryId = null, search = null) => {
  const queryOptions = {
    include: ["Category"],
    order: [["product_name", "ASC"]],
  };

  if (categoryId) {
    queryOptions.where = { category_id: categoryId };
  }

  if (search) {
    queryOptions.where = {
      ...queryOptions.where,
      product_name: {
        [Op.like]: `%${search}%`,
      },
    };
  }

  return Product.findAll(queryOptions);
};

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
