const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema(
  {
    url_image_thumbnail: {
      type: String,
      required: true,
    },
    video_url: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

videoSchema.set();
module.exports = mongoose.model("Video", videoSchema);
