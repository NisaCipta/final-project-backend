const { videoModel } = require("../models");

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
    return await videoModel.findById(id);
  } catch (error) {
    throw new Error("repo : Failed to get video by id");
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
};
