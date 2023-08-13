const service = require("../services");
const pkg = require("../../src/pkg");

const createProduct = async (req, res) => {
  try {
    let { title, price, video_id, link_product } = req.body;

    if (title == "") {
      throw new pkg.CustomError("title is required", 400);
    }
    if (price == 0) {
      throw new pkg.CustomError("price is required", 400);
    }
    if (video_id == "") {
      throw new pkg.CustomError("video_id is required", 400);
    }
    if (link_product == "") {
      throw new pkg.CustomError("link_product is required", 400);
    }

    let newProduct = await service.productService.createProduct(req.body);

    pkg.Responder.generateResponse(res, 201, "success create product", newProduct);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const dataProducts = await service.productService.getAllProduct();
    pkg.Responder.generateResponse(res, 200, "success get all products", dataProducts);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const dataProduct = await service.productService.getProductById(id);
    pkg.Responder.generateResponse(res, 200, "success get product by id", dataProduct);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const searchItemsProduct = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      throw new pkg.CustomError("query is required", 400);
    }
    const results = await service.productService.searchItemsProduct(query);
    pkg.Responder.generateResponse(res, 200, "success get product", results);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  searchItemsProduct,
};
