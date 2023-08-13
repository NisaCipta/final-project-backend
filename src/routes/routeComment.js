const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment");

router.get("/search", commentController.searchItemsComment);
router.post("/", commentController.createComment);
router.get("/", commentController.getAllComment);
router.get("/:id", commentController.getCommentById);

module.exports = router;
