const service = require("../services");
const authMiddleware = require("../middleware/authMiddleware");
const pkg = require("../pkg");

const registerUser = async (req, res) => {
  try {
    let { username, email, password, url_image_profile } = req.body;

    if (username == "") {
      throw new pkg.CustomError("username is required", 400);
    }
    if (email == "") {
      throw new pkg.CustomError("email is required", 400);
    }

    if (password == "") {
      throw new pkg.CustomError("password is required", 400);
    }

    const user = await service.userService.createUser(username, email, password, url_image_profile);

    pkg.Responder.generateResponse(res, 201, "success register", user);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (email == "") {
      pkg.CustomError("email is required", 400);
    }
    if (password == "") {
      pkg.CustomError("password is required", 400);
    }

    const token = await service.userService.loginUser(email, password);

    pkg.Responder.generateResponse(res, 200, "success login", token);
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
};

const uploadImage = async (req, res) => {
  try {
  } catch (error) {
    pkg.Responder.responseError(res, error);
  }
  await service.userService.uploadImage();
};

// Configure multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const extname = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + Date.now() + extname);
//   },
// });

// // Initialize multer upload
// const upload = multer({ storage });

// router.post("/upload", upload.single("image"), async (req, res) => {
//   const { filename, path } = req.file;

//   try {
//     const newImage = await ImageService.uploadImage(filename, path);
//     res.status(201).json({ message: "Image uploaded successfully", image: newImage });
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while uploading the image" });
//   }
// });

module.exports = {
  registerUser,
  loginUser,
  uploadImage,
};
