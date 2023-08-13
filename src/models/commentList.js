const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    video_id: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    comment: {
      require: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

commentSchema.set();
module.exports = mongoose.model("Comment", commentSchema);
