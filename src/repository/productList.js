const { productModel } = require("../models");

// post
const createProduct = async (data) => {
  try {
    const saveProduct = await productModel.create(data);
    return saveProduct;
  } catch (error) {
    console.log("Failed to create product");
    throw error;
  }
};

// get all product
const getAllProduct = async () => {
  try {
    const products = productModel.find();
    return products;
  } catch (error) {
    console.log("Failed to get all product");
    throw error;
  }
};

// get by id
const getProductById = async (id) => {
  try {
    return await productModel.findById(id);
  } catch (error) {
    console.log("Failed to get product by id");
    throw error;
  }
};

const getProductByVideoID = async (id) => {
  try {
    const products = await productModel.find({ video_id: id });
    return products;
  } catch (error) {
    console.log("Failed to get product by video id");
    throw error;
  }
};

const searchItemsProduct = async (query) => {
  const regex = new RegExp(query, "i");
  return await productModel.find({ title: regex });
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  getProductByVideoID,
  searchItemsProduct,
};
