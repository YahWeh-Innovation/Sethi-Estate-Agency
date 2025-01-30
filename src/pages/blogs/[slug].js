import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Card,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { formatDate } from "../../utils/datetime";

const getRandomPosts = (posts, count) => {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const [latestPost, setLatestPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`/api/posts/${slug}`);
          if (response.data) {
            setPost(response.data);
            setNotFound(false);
          } else {
            setNotFound(true);
          }
        } catch (error) {
          console.error("Error fetching blog post:", error);
          setNotFound(true);
        }
      };

      const fetchRecommendedPosts = async () => {
        try {
          const response = await axios.get("/api/posts/getAll");
          const filteredPosts = response.data.filter(
            (recommendedPost) => recommendedPost.slug !== slug
          );
          const randomPosts = getRandomPosts(filteredPosts, 3);
          setRecommendedPosts(randomPosts);
          if (response.data.length > 0) {
            setLatestPost(response.data[0]);
          }
        } catch (error) {
          console.error("Error fetching recommended posts:", error);
        }
      };

      fetchPost();
      fetchRecommendedPosts();
    }
  }, [slug]);

  if (notFound) {
    return (
      <Box sx={{ textAlign: "center", padding: "50px", marginTop: "100px" }}>
        <Typography
          variant="h3"
          sx={{ marginBottom: "20px", color: "#2F1D19" }}
        >
          404 - Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "40px", color: "#8F90A6" }}
        >
          Sorry, the blog post you're looking for doesn't exist.
        </Typography>
        {latestPost && (
          <Link href={`/blogs/${latestPost.slug}`} passHref>
            <Button
              variant="text"
              sx={{
                color: "#2F1D19",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Check out our other post: {latestPost.title}
            </Button>
          </Link>
        )}
      </Box>
    );
  }

  if (!post) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          padding: "20px",
          maxWidth: "1400px",
          marginY: "64px",
          marginX: "auto",
        }}
      >
        <CardMedia
          component="img"
          image={post.blogImageBanner}
          alt={post.title}
          sx={{
            width: "100%",
            height: "450px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        />

        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#2F1D19",
              }}
            >
              {post.title}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              sx={{ marginBottom: "20px", marginTop: "15px" }}
            >
              <CloudUploadOutlinedIcon
                sx={{ color: "rgb(129, 59, 44)", marginRight: "12px" }}
              />
              <Typography variant="body2" color="#2F1D19">
                {formatDate(post.createdAt)}
              </Typography>
            </Box>

            {post.content.map((item, index) => (
              <Box key={index}>
                {item.type === "text" ? (
                  <Box
                    sx={{
                      lineHeight: 1.8,
                      marginBottom: "20px",
                      textAlign: "justify",
                      color: "rgba(0,0,0,0.8)",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.data }}
                  />
                ) : (
                  <CardMedia
                    component="img"
                    image={item.data}
                    alt={`Blog image ${index}`}
                    sx={{
                      width: "100%",
                      height: "300px",
                      margin: "20px 0",
                      borderRadius: "5px",
                    }}
                  />
                )}
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: "20px" }}>
              {recommendedPosts.length > 0 ? (
                recommendedPosts.map((recommendedPost) => (
                  <Link
                    key={recommendedPost.slug}
                    href={`/blogs/${recommendedPost.slug}`}
                    passHref
                  >
                    <Card
                      sx={{
                        marginBottom: "20px",
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "350px",
                        "&:hover .title-overlay": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={recommendedPost.blogImageBanner}
                        alt={recommendedPost.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <Box
                        className="title-overlay"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          height: "98px",
                          padding: "10px",
                          borderTopLeftRadius: "5px",
                          borderTopRightRadius: "5px",
                          opacity: {xs:1,md:0},
                          transform: "translateY(20px)",
                          transition: "opacity 0.3s, transform 0.3s",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "bold", color: "#2F1D19" }}
                        >
                          {recommendedPost.title}
                        </Typography>
                        <Box display="flex" alignItems="center">
                          <CloudUploadOutlinedIcon
                            sx={{
                              color: "rgb(129, 59, 44)",
                              marginRight: "5px",
                            }}
                          />
                          <Typography variant="body2" sx={{ color: "#2F1D19" }}>
                            {formatDate(recommendedPost.createdAt)}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Link>
                ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No recommended posts available.
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
