const service = require("../services");
const pkg = require("../../src/pkg");

const createVideo = async (req, res) => {
  try {
    let { title, video_url } = req.body;

    if (video_url == "") {
      throw new pkg.CustomError("video_url is required", 400);
    }

    if (title == "") {
      throw new pkg.CustomError("title is required", 400);
    }

    let newVideo = await service.videoService.createVideo(req.body);

    pkg.Responder.generateResponse(res, 201, "success create video", newVideo);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getAllVideo = async (req, res) => {
  try {
    const dataVideos = await service.videoService.getAllVideo();
    pkg.Responder.generateResponse(res, 200, "success get all video", dataVideos);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getVideoById = async (req, res) => {
  try {
    const id = req.params.id;
    const video = await service.videoService.getVideoById(id);
    pkg.Responder.generateResponse(res, 200, "success get video by id", video);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getVideoWithProducts = async (req, res) => {
  try {
    let id = req.params.id;
    let video = await service.videoService.getVideoWithProducts(id);
    pkg.Responder.generateResponse(res, 200, "success get video with products", video);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getVideoWithComments = async (req, res) => {
  try {
    let id = req.params.id;
    let video = await service.videoService.getVideoWithComments(id);
    pkg.Responder.generateResponse(res, 200, "success get video with comments", video);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
  getVideoWithProducts,
  getVideoWithComments,
};
