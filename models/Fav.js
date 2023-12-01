
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    favItems: {
      type: Array,
      required: [true, "Please provide cartItems object"],
    },
   
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);



export default mongoose.model("Fav", ProductSchema);