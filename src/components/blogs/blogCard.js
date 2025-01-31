import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const truncatedDescription = blog.content
    .filter((content) => content.type === "text")
    .map((content) => content.data)
    .join(" ")
    .substring(0, 140000);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        padding: 2,
        margin: "auto",
        border: "none",
        boxShadow: "none",
        height: isSmallScreen ? "auto" : "50vh",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "40%",
          position: "relative",
          height: isSmallScreen ? "300px" : "100%",
        }}
      >
        <Link href={`/blogs/${blog.slug}`}>
          <CardMedia
            component="img"
            image={blog.blogImageBanner || ""}
            alt="Blog Banner"
            sx={{
              borderRadius: 2,
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isSmallScreen ? "100%" : "60%",
          position: "relative",
          overflowY: "hidden",
        }}
      >
        <CardContent sx={{paddingY:"0px !important"}}>

          <Link href={`/blogs/${blog.slug}`}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {blog.title}
            </Typography>
          </Link>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxHeight: isSmallScreen ? "150px" : "400px",
              overflow: "auto",
              paddingBottom: "1%",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: truncatedDescription,
              }}
            ></span>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
