import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/blogs/blogCard";
import BlogsNotFound from "../../components/blogs/blogsNotFound";
import { Box } from "@mui/material";

export default function Search() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/posts/getAll", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching Blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ marginTop: "64px", minHeight: "100vh" }}>
        <Box sx={{ paddingY: { xs: 0, md: 2 } }}>
          {loading ? (
            <p>Loading Blogs...</p>
          ) : blogData.length > 0 ? (
            blogData.map((data, index) => (
              <BlogCard key={index} blog={data} index={index} />
            ))
          ) : (
            <BlogsNotFound />
          )}
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
