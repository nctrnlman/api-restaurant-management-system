const productRepository = require("../repositories/productRepository");

const getProducts = () => productRepository.getAllProducts();

const getProduct = (id) => productRepository.getProductById(id);

const createProduct = (data) => productRepository.createProduct(data);

const updateProduct = (id, data) =>
  productRepository.updateProductById(id, data);

const deleteProduct = (id) => productRepository.deleteProductById(id);

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
