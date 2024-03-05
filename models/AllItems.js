import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    items: {
      type: Array,
      required: [true, "Please provide items object"],
    },
    text: {
      type: String,
      required: [true, "Please provide items text"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("AllItems", ProductSchema);
