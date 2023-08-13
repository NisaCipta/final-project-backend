const express = require("express");
const router = express.Router();

const commentRoute = require("./routeComment");
const videoRoute = require("./routeVideo");
const productRoute = require("./routeProduct");
const authRoute = require("./routeAuth");
const { verifyToken } = require("../middleware/authMiddleware");

// public access
router.use("/auth", authRoute);

// private access
router.use("/comments", verifyToken, commentRoute);
router.use("/videos", verifyToken, videoRoute);
router.use("/products", verifyToken, productRoute);

module.exports = router;
