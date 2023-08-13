const service = require("../services");
const pkg = require("../../src/pkg");

const createComment = async (req, res) => {
  try {
    const { video_id, username, comment } = req.body;

    if (video_id == "") {
      throw new pkg.CustomError("video_id is required", 400);
    }
    if (username == "") {
      throw new pkg.CustomError("username is required", 400);
    }
    if (comment == "") {
      throw new pkg.CustomError("comment is required", 400);
    }

    const newComment = await service.commentService.createComment(req.body);
    pkg.Responder.generateResponse(res, 201, "success create comment", newComment);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getAllComment = async (req, res) => {
  try {
    const dataComments = await service.commentService.getAllComment();
    pkg.Responder.generateResponse(res, 200, "success get all comment", dataComments);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const getCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const dataComment = await service.commentService.getCommentById(id);
    pkg.Responder.generateResponse(res, 200, "success get comment by id", dataComment);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const searchItemsComment = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      throw new pkg.CustomError("query is required", 400);
    }
    const results = await service.commentService.searchItemsComment(query);
    pkg.Responder.generateResponse(res, 200, "success get comment", results);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

module.exports = {
  createComment,
  getAllComment,
  getCommentById,
  searchItemsComment,
};
