const db = require("../models");
const Product = db.Product;

const getProducts = async (req, res) => {
  try {
    const { categoryId } = req.query;

    const products = categoryId
      ? await Product.findAll({
          where: { category_id: categoryId },
          include: ["Category"],
        })
      : await Product.findAll({
          include: ["Category"],
        });

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

const getProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: ["Category"],
    });
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

const createProduct = async (req, res) => {
  try {
    const { product_name, product_price, category_id, description } = req.body;
    const product = await Product.create({
      product_name,
      product_price,
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, product_price, category_id, description } = req.body;

    const product = await Product.findByPk(id);
    if (product) {
      product.product_name = product_name || product.product_name;
      product.product_price = product_price || product.product_price;
      product.category_id = category_id || product.category_id;
      product.description = description || product.description;
      await product.save();
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

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
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
