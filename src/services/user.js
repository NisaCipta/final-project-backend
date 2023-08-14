const Repo = require("../repository");
const pkg = require("../pkg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const multer = require("multer");
// const path = require("path");

const createUser = async (username, email, password, url_image_profile) => {
  try {
    //kalau emailnya sudah ada
    const existsEmail = await Repo.userRepo.getUserByEmail({ email });
    if (existsEmail) {
      console.log("service : email sudah ada");
      throw new pkg.CustomError("email sudah terdaftar", 400);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userData = { username, email, password: hashPassword, url_image_profile };
    return await Repo.userRepo.createUser(userData);
  } catch (error) {
    console.log("service : failed to regis");
    throw new pkg.CustomError("Email is already available, please login", 400);
  }
};

const loginUser = async (email, password) => {
  try {
    //cek email sdh terdaftar belum
    const user = await Repo.userRepo.getUserByEmail({ email });
    if (!user) {
      console.log("service : user not found");
      throw new pkg.CustomError("user not found", 404);
    }
    //compare password pakai bcrypt
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("service : password is not compare");
      throw new pkg.CustomError("Wrong Email or Password ", 400);
    }
    //kembalikan token jwt
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.log("service : Email tidak didaftarkan", error);
    throw error;
  }
};

const uploadImage = async (filename, path) => {
  try {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads/");
      },
      filename: function (req, file, cb) {
        const extname = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + Date.now() + extname);
      },
    });

    // Initialize multer upload
    const upload = multer({ storage });

    const imageData = { filename, path };
    return await Repo.userRepo.uploadImage(imageData);
  } catch (error) {
    throw new pkg.CustomError("service : Failed to upload image", 404);
  }
};

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
  createUser,
  loginUser,
  uploadImage,
};
