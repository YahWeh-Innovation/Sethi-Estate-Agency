import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CloudUploadOutlined as CloudUploadOutlinedIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import Link from "next/link";
import axios from "axios";
import { truncateText } from "../utils/strings";
import { formatDate } from "../utils/datetime";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const sliderRef = useRef(null);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts/getAll");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError(true);
      }
    };

    fetchPosts();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = isMediumScreen
        ? isSmallScreen
          ? window.innerWidth
          : window.innerWidth / 2
        : 380;

      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = isMediumScreen
        ? isSmallScreen
          ? window.innerWidth
          : window.innerWidth / 2
        : 380;

      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: "15px 10px", md: "30px 72px" },
        margin: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        position: "relative",
      }}
    >
      {error ? (
        <Typography variant="body2" color="textSecondary">
          Error fetching blog posts.
        </Typography>
      ) : posts.length > 0 ? (
        <>
          <Box
            sx={{
              width: { xs: "100%", md: "300px", lg: "360px" },
              height: { xs: "60px", sm: "100px", md: "360px" },
              backgroundColor: "#d9c9af",
              borderRadius: "5px",
              position: "relative",
              marginRight: { xs: "0", md: "30px" },
              marginBottom: { xs: "20px", md: "0" },
            }}
          >
            <Typography
              sx={{
                color: "#2f1d19",
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: "bold",
                fontFamily: "'Roboto', sans-serif",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                padding: { xs: "0 15px", md: "0" },
              }}
            >
              Latest Blogs From Us
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              flex: 1,
              width: { xs: "100%", md: "auto" },
            }}
          >
            {!isMediumScreen && (
              <>
                <IconButton
                  sx={{
                    position: "absolute",
                    left: "-450px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    padding: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                  onClick={scrollLeft}
                >
                  <ArrowBackIcon sx={{ color: "#B18C5E" }} />
                </IconButton>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    padding: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                  onClick={scrollRight}
                >
                  <ArrowForwardIcon sx={{ color: "#B18C5E" }} />
                </IconButton>
              </>
            )}

            <Box
              ref={sliderRef}
              sx={{
                display: "flex",
                overflowX: "hidden",
                scrollBehavior: "smooth",
                width: "100%",
                gap: "20px",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {posts.map((post) => (
                <Box
                  key={post._id}
                  sx={{
                    flex: { xs: "0 0 100%", md: "0 0 calc(50% - 10px)" },
                    width: "100%",
                    maxWidth: { xs: "100%", md: "380px" },
                  }}
                >
                  <Card
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: { xs: "250px", md: "360px" },
                      "&:hover .title-overlay": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Link href={`/blogs/${post.slug}`} passHref>
                      <CardMedia
                        component="img"
                        src={post.blogImageBanner}
                        alt={post.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                    <Box
                      className="title-overlay"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        height: { xs: "70px", md: "90px" },
                        padding: "10px",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        opacity: isMediumScreen ? 1 : 0,
                        transform: "translateY(20px)",
                        transition: "opacity 0.3s, transform 0.3s",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "#2F1D19",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {truncateText(post.title, 50)}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <CloudUploadOutlinedIcon
                          sx={{
                            color: "#D9C9AF",
                            marginRight: "5px",
                            fontSize: { xs: "16px", md: "default" },
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#2F1D19",
                            fontSize: { xs: "12px", md: "default" },
                          }}
                        >
                          {formatDate(post.createdAt)}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Box>

            {isMediumScreen && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                  gap: "20px",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    padding: "8px",

                  }}
                  onClick={scrollLeft}
                >
                  <ArrowBackIcon sx={{ color: "#B18C5E" }} />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  onClick={scrollRight}
                >
                  <ArrowForwardIcon sx={{ color: "#B18C5E" }} />
                </IconButton>
              </Box>
            )}
          </Box>
        </>
      ) : (
        <Typography variant="body2" color="textSecondary">
          No blog posts available.
        </Typography>
      )}
    </Box>
  );
};

export default Blogs;