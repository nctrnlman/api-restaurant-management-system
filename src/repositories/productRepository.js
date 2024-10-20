const db = require("../models");
const { Op } = require("sequelize");
const Product = db.Product;

// Fungsi untuk mengambil semua produk, dengan opsi filter berdasarkan kategori dan pencarian
const getAllProducts = (categoryId = null, search = null) => {
  const queryOptions = {
    include: ["Category"],
    order: [["product_name", "ASC"]],
  };
  // Jika categoryId disediakan, tambahkan ke opsi pencarian
  if (categoryId) {
    queryOptions.where = { category_id: categoryId };
  }
  // Jika ada istilah pencarian, tambahkan filter pencarian
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

// Fungsi untuk mengambil produk berdasarkan ID
const getProductById = (id) => Product.findByPk(id, { include: ["Category"] });

// Fungsi untuk membuat produk baru
const createProduct = (data) => Product.create(data);

// Fungsi untuk memperbarui produk berdasarkan ID
const updateProductById = (id, data) =>
  Product.findByPk(id).then((product) => {
    if (product) {
      return product.update(data);
    }
    return null;
  });

// Fungsi untuk menghapus produk berdasarkan ID
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
