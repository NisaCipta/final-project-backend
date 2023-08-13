const Repo = require("../repository");

const createVideo = async (dataVideo) => {
  try {
    const video = dataVideo;
    return await Repo.videoRepo.createVideo(video);
  } catch (error) {
    throw new Error("service : Failed to create video");
  }
};

const getAllVideo = async () => {
  try {
    return await Repo.videoRepo.getAllVideo();
  } catch (error) {
    throw new Error("service : Failed to get all video");
  }
};

const getVideoById = async (id) => {
  try {
    return await Repo.videoRepo.getVideoById(id);
  } catch (error) {
    throw new Error("service : Failed to get video by id");
  }
};

const combineVideoWithProducts = (video, products) => {
  return {
    _id: video_id,
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
    throw new Error("service : Failed to get video with product");
  }
};
const combineVideoWithComments = (video, comments) => {
  return {
    _id: video_id,
    url_image_thumbnail: video.url_image_thumbnail,
    video_url: video.video_url,
    comments: [...comments],
    createdAt: video.createdAt,
    updatedAt: video.updatedAt,
  };
};

const getVideoWithComments = async (req, res) => {
  try {
    let video = await Repo.videoRepo.getVideoById(id);
    if (video == null) {
      throw new Error("service : video not found");
    }
    let comments = await Repo.commentRepo.getCommentByVideoId(id);
    return combineVideoWithComments(video, comments);
  } catch (error) {
    throw new Error("service : Failed to get video with comments");
  }
};

module.exports = {
  createVideo,
  getAllVideo,
  getVideoById,
  getVideoWithProducts,
  getVideoWithComments,
};
