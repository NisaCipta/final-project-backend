const Repo = require("../repository");
const pkg = require("../pkg");

const createComment = async (dataComment) => {
  try {
    let comment = dataComment;
    let video = await Repo.videoRepo.getVideoById(comment.video_id);

    if (video == null) {
      console.log("service : video not found");
      throw new pkg.CustomError("video is not found", 404);
    }

    const newComment = await Repo.commentRepo.createComment(dataComment);
    return newComment;
  } catch (error) {
    throw error;
  }
};

const getAllComment = async () => {
  try {
    return await Repo.commentRepo.getAllComment();
  } catch (error) {
    console.log("service : comment not found");
    throw error;
  }
};

const getCommentById = async (id) => {
  try {
    return await Repo.commentRepo.getCommentById(id);
  } catch (error) {
    console.log("service : comment by id not found");
    throw error;
  }
};

const searchItemsComment = async (query) => {
  try {
    return await Repo.commentRepo.searchItemsComment(query);
  } catch (error) {
    console.log("service : comment not found");
    throw error;
  }
};

module.exports = {
  createComment,
  getAllComment,
  getCommentById,
  searchItemsComment,
};
