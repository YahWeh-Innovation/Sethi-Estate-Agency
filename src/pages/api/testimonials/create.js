import dbConnect from "../../../lib/dbConnect";
import Testimonial from "../../../models/testimonial";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      console.log("Comming..........")
      const { image, quote, description, author, role } = req.body;

      if (!quote || !description || !author || !role) {
        return res.status(400).json({
          success: false,
          message: "Quote, description, author, and role are required fields.",
        });
      }

      const newTestimonial = new Testimonial({
        image,
        quote,
        description,
        author,
        role,
      });
      
      const savedTestimonial = await newTestimonial.save();

      return res.status(201).json({
        success: true,
        message: "Testimonial created successfully.",
        data: savedTestimonial,
      });
    } catch (error) {
      console.error("Error creating testimonial:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while creating the testimonial.",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed.`,
    });
  }
}