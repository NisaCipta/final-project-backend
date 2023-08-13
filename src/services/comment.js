const Repo = require("../repository");

const createComment = async (dataComment) => {
  try {
    let comment = dataComment;
    let video = await Repo.videoRepo.getVideoById(comment.video_id);

    if (video == null) {
      throw new Error("service : Failed to create comment");
    }

    const newComment = await Repo.commentRepo.createComment(dataComment);
    return newComment;
  } catch (error) {
    throw new Error("service : Failed to create comment");
  }
};

const getAllComment = async () => {
  try {
    return await Repo.commentRepo.getAllComment();
  } catch (error) {
    throw new Error("service : Failed to get all comment");
  }
};

const getCommentById = async (id) => {
  try {
    return await Repo.commentRepo.getCommentById(id);
  } catch (error) {
    throw new Error("service : Failed to get comment by id");
  }
};

const searchItemsComment = async (query) => {
  try {
    return await Repo.commentRepo.searchItemsComment(query);
  } catch (error) {
    throw new Error("service : Failed to search product");
  }
};

module.exports = {
  createComment,
  getAllComment,
  getCommentById,
  searchItemsComment,
};
