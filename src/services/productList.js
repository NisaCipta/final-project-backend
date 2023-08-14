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
    if (error.message == '')
    console.log("service: ",error)
    throw new error;
  }
};

const getAllProduct = async () => {
  try {
    return await Repo.productRepo.getAllProduct();
  } catch (error) {
    throw new Error("service : Failed to get all product");
  }
};

const getProductById = async (id) => {
  try {
    return await Repo.productRepo.getProductById(id);
  } catch (error) {
    throw new Error("service : Failed to get product by id");
  }
};

const searchItemsProduct = async (query) => {
  try {
    return await Repo.productRepo.searchItemsProduct(query);
  } catch (error) {
    throw new Error("service : Failed to search product");
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  searchItemsProduct,
};
