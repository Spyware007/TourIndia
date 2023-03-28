import mongoose from "mongoose";
import { Schema } from "mongoose";

const TourModel = new Schema(
  {
    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    image: {
      type: Buffer,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", TourModel);

export default Tour;
