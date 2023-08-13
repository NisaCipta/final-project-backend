const { userModel } = require("../models");

// post
const createUser = async (data) => {
  try {
    const saveUser = await userModel.create(data);
    return saveUser;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

// get user by email
const getUserByEmail = async (email) => {
  try {
    const user = await userModel.findOne(email);
    return user;
  } catch (error) {
    throw new Error("Failed to get user by email");
  }
};

const uploadImage = async (imageData) => {
  try {
    const image = await userModel.save(imageData);
    return image;
  } catch (error) {
    throw new Error("Failed to upload image");
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  uploadImage,
};
