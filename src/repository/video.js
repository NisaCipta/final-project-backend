const { videoModel } = require("../models");
const mongoose = require("mongoose");
const pkg = require("../../src/pkg");

// post
const createVideo = async (data) => {
  try {
    const saveVideo = await videoModel.create(data);
    return saveVideo;
  } catch (error) {
    throw new Error("repo : Failed to create video");
  }
};

// get all video
const getAllVideo = async () => {
  try {
    const videos = await videoModel.find();
    return videos;
  } catch (error) {
    throw new Error("repo : Failed to get all video");
  }
};

// get by id
const getVideoById = async (id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("repo getVideoById: Invalid video ID.");
      throw new pkg.CustomError("Invalid video_id", 400);
    }
    const video = await videoModel.findById(id);
    if (!video){
      console.log("repo getVideoById: video not found");
      throw new pkg.CustomError("video not found", 404);
    }
    return video
  } catch (error) {
    throw error
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
};
