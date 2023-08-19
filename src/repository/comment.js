const { commentModel } = require("../models");

// post
const createComment = async (data) => {
  try {
    const saveComment = await commentModel.create(data);
    return saveComment;
  } catch (error) {
    console.log("repo : Failed to create comment");
    throw error;
  }
};

// get all comment
const getAllComment = async () => {
  try {
    const comments = commentModel.find();
    return comments;
  } catch (error) {
    console.log("repo : Failed to get all comment");
    throw error;
  }
};

// get by id
const getCommentById = async (id) => {
  try {
    return await commentModel.findById(id);
  } catch (error) {
    console.log("repo : Failed to get comment by id");
    throw error;
  }
};

// get comment by video
const getCommentByVideoId = async (id) => {
  try {
    const comments = await commentModel.find({ video_id: id });
    return comments;
  } catch (error) {
    console.log("repo : Failed to get comment by video id");
    throw error;
  }
};

// search comment
const searchItemsComment = async (query) => {
  const regex = new RegExp(query, "i");
  return await commentModel.find({ comment: regex });
};

module.exports = {
  createComment,
  getAllComment,
  getCommentById,
  getCommentByVideoId,
  searchItemsComment,
};
