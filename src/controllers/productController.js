const productService = require("../services/productService");

// Fungsi untuk mengambil produk berdasarkan query
const getProducts = async (req, res) => {
  try {
    const { categoryId, search } = req.query; // Mengambil parameter query
    // Mengambil produk berdasarkan kategori dan pencarian
    const products = await productService.getProducts(categoryId, search);

    res.sendResponse(
      "success",
      "Products retrieved successfully",
      products,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve products",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk mengambil produk berdasarkan ID
const getProduct = async (req, res) => {
  try {
    // Mengambil produk berdasarkan ID dari parameter request
    const product = await productService.getProduct(req.params.id);
    if (product) {
      res.sendResponse(
        "success",
        "Product retrieved successfully",
        product,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve product",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk membuat produk baru
const createProduct = async (req, res) => {
  try {
    // Mengambil data produk dari body request
    const {
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    } = req.body;

    // Menggunakan productService untuk membuat produk baru
    const product = await productService.createProduct({
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    });
    res.sendResponse(
      "success",
      "Product created successfully",
      product,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create product",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk memperbarui produk yang sudah ada
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID dari parameter request
    // Mengambil data produk dari body request
    const {
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    } = req.body;

    // Memperbarui produk dengan ID dan data baru
    const product = await productService.updateProduct(id, {
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    });
    if (product) {
      res.sendResponse(
        "success",
        "Product updated successfully",
        product,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update product",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk menghapus produk berdasarkan ID
const deleteProduct = async (req, res) => {
  try {
    // Menghapus produk berdasarkan ID
    const product = await productService.deleteProduct(req.params.id);
    if (product) {
      res.sendResponse(
        "success",
        "Product deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete product",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
