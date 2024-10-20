const productRepository = require("../repositories/productRepository");

// Mengambil semua produk dengan filter berdasarkan kategori dan pencarian
const getProducts = (categoryId, search) =>
  productRepository.getAllProducts(categoryId, search);

// Mengambil produk berdasarkan ID
const getProduct = (id) => productRepository.getProductById(id);

// Membuat produk baru
const createProduct = (data) => productRepository.createProduct(data);

// Memperbarui produk berdasarkan ID
const updateProduct = (id, data) =>
  productRepository.updateProductById(id, data);

// Menghapus produk berdasarkan ID
const deleteProduct = (id) => productRepository.deleteProductById(id);

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
