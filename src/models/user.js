const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
    },
    email: {
      require: true,
      type: String,
    },
    password: {
      require: true,
      type: String,
    },
    url_image_profile: {
      require: true,
      type: String,
    },
  },

  {
    versionKey: false,
    timeseries: true,
  }
);

userSchema.set();
module.exports = mongoose.model("Users", userSchema);
