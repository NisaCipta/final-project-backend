const Repo = require("../repository");
const pkg = require("../pkg");

const createProduct = async (dataProduct) => {
  try {
    const product = dataProduct;
    let video = await Repo.videoRepo.getVideoById(product.video_id);
    if (video == null) {
      throw new pkg.CustomError("video is not found", 404);
    }
    return await Repo.productRepo.createProduct(product);
  } catch (error) {
    console.log("service : failed to create product", error);
    throw error;
  }
};

const getAllProduct = async () => {
  try {
    return await Repo.productRepo.getAllProduct();
  } catch (error) {
    console.log("service : Failed to get all product", error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    return await Repo.productRepo.getProductById(id);
  } catch (error) {
    console.log("service : Failed to get product by id", error);
    throw error;
  }
};

const searchItemsProduct = async (query) => {
  try {
    return await Repo.productRepo.searchItemsProduct(query);
  } catch (error) {
    console.log("service : Failed to search product");
    throw error;
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  searchItemsProduct,
};
