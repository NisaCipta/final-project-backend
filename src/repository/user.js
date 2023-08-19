const { userModel } = require("../models");

// post
const createUser = async (data) => {
  try {
    const saveUser = await userModel.create(data);
    return saveUser;
  } catch (error) {
    console.log("Failed to create user");
    throw error;
  }
};

// get user by email
const getUserByEmail = async (email) => {
  try {
    const user = await userModel.findOne(email);
    return user;
  } catch (error) {
    console.log("Failed to get user by email");
    throw error;
  }
};

const uploadImage = async (imageData) => {
  try {
    const image = await userModel.save(imageData);
    return image;
  } catch (error) {
    console.log("Failed to upload image");
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  uploadImage,
};
