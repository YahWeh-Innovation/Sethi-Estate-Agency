import dbConnect from "../../../lib/dbConnect";
import Testimonial from "../../../models/testimonial";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const testimonials = await Testimonial.find();

      return res.status(200).json({
        success: true,
        message: "Testimonials retrieved successfully.",
        data: testimonials,
      });
    } catch (error) {
      console.error("Error retrieving testimonials:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while retrieving testimonials.",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed.`,
    });
  }
}