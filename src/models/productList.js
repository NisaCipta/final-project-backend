const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    price: {
      require: true,
      type: Number,
    },
    video_id: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    link_product: {
      require: true,
      type: String,
    },
  },
  
  {
    versionKey: false,
    timeseries: true,
  }
);

productSchema.set();
module.exports = mongoose.model("Product", productSchema);
