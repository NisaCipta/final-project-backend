const Repo = require("../repository");

const createVideo = async (dataVideo) => {
  try {
    const video = dataVideo;
    return await Repo.videoRepo.createVideo(video);
  } catch (error) {
    console.log("service : Failed to create video");
    throw error;
  }
};

const getAllVideo = async () => {
  try {
    return await Repo.videoRepo.getAllVideo();
  } catch (error) {
    console.log("service : Failed to get all video");
    throw error;
  }
};

const getAllVideoByTitle = async (title) => {
  try {
    return await Repo.videoRepo.getAllVideoByTitle(title);
  } catch (error) {
    console.log("service : Failed to get all video by title");
    throw error;
  }
};

const getVideoById = async (id) => {
  try {
    return await Repo.videoRepo.getVideoById(id);
  } catch (error) {
    console.log("service : Failed to get video by id");
    throw error;
  }
};

const combineVideoWithProducts = (video, products) => {
  return {
    _id: video._id,
    url_image_thumbnail: video.url_image_thumbnail,
    video_url: video.video_url,
    products: [...products],
    createdAt: video.createdAt,
    updatedAt: video.updatedAt,
  };
};

const getVideoWithProducts = async (id) => {
  try {
    let video = await Repo.videoRepo.getVideoById(id);
    if (video == null) {
      throw new Error("service : video not found");
    }
    let products = await Repo.productRepo.getProductByVideoID(id);
    
    return combineVideoWithProducts(video, products);
  } catch (error) {
    console.log("service : Failed to get video with product");
    console.log("service : Failed to get video with product");
    throw error;
  }
};
const combineVideoWithComments = (video, comments) => {
  return {
    _id: video._id,
    url_image_thumbnail: video.url_image_thumbnail,
    video_url: video.video_url,
    comments: [...comments],
    createdAt: video.createdAt,
    updatedAt: video.updatedAt,
  };
};

const getVideoWithComments = async (id) => {
  try {
    let video = await Repo.videoRepo.getVideoById(id);
    if (video == null) {
      throw new Error("service : video not found");
    }
    let comments = await Repo.commentRepo.getCommentByVideoId(id);
    return combineVideoWithComments(video, comments);
  } catch (error) {
    console.log("service : Failed to get video with comment");
    throw error;
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
  getVideoWithProducts,
  getVideoWithComments,
  getAllVideoByTitle,
};
