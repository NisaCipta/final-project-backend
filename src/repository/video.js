const { videoModel } = require("../models");
const mongoose = require("mongoose");
const pkg = require("../../src/pkg");

// post
const createVideo = async (data) => {
  try {
    const saveVideo = await videoModel.create(data);
    return saveVideo;
  } catch (error) {
    console.log("repo : Failed to create video");
    throw error;
  }
};

// get all video
const getAllVideo = async () => {
  try {
    const videos = await videoModel.find();
    return videos;
  } catch (error) {
    console.log("repo : Failed to get all video");
    throw error;
  }
};

const getAllVideoByTitle = async (title) => {
  try {
    const regex = new RegExp(title, "i");
    return await videoModel.find({ title: regex });
  } catch (error) {
    console.log("repo : Failed to get all video by title");
    throw error;
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
    if (!video) {
      console.log("repo getVideoById: video not found");
      throw new pkg.CustomError("video not found", 404);
    }
    return video;
  } catch (error) {
    console.log("repo : Failed to get video by title");
    throw error;
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
  getAllVideoByTitle,
};
