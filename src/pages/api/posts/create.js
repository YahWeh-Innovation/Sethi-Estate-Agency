import dbConnect from "../../../lib/dbConnect";
import BlogPost from "../../../models/blogpost";
import slugify from "slugify";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, content, author, tags, blogImageBanner } = req.body;

      if (!Array.isArray(content) || content.length === 0) {
        return res
          .status(400)
          .json({
            success: false,
            message: "Content must be an array with at least one item.",
          });
      }

      let slug = slugify(title, { lower: true, strict: true });
      let existingPost = await BlogPost.findOne({ slug });
      let suffix = 1;
      while (existingPost) {
        let newSlug = `${slug}-${suffix}`;
        existingPost = await BlogPost.findOne({ slug: newSlug });
        suffix++;
      }
      slug = suffix === 1 ? slug : `${slug}-${suffix - 1}`;

      const formattedContent = content.map((block) => {
        if (block.type === "text" && typeof block.data !== "string") {
          throw new Error("Text content must be a string.");
        }
        if (block.type === "image" && typeof block.data !== "string") {
          throw new Error("Image content must be a valid URL string.");
        }
        return block;
      });

      const newPost = new BlogPost({
        title,
        slug,
        content: formattedContent,
        author,
        tags,
        blogImageBanner,
      });

      const savedPost = await newPost.save();
      res.status(201).json({
        success: true,
        message: "Blog post created successfully",
        savedPost,
      });
    } catch (error) {
      console.error("Error creating blog post:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "Error creating blog post",
          error: error.message,
        });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
