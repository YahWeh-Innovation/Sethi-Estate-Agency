import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false,
    trim: true,
  },
  quote: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);