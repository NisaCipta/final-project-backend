const express = require("express");
const router = express.Router();

const videoController = require("../controllers/video");

router.post("/", videoController.createVideo);
router.get("/", videoController.getAllVideo);
router.get("/:id", videoController.getVideoById);

router.get("/:id/products", videoController.getVideoWithProducts);

router.get("/:id/comments", videoController.getVideoWithComments);

module.exports = router;
