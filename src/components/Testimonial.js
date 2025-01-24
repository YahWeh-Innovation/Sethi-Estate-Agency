import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Testimonial = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials/get");
        const result = await response.json();
        if (result.success) {
          setTestimonials(result.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        testimonials.length > 0 ? (prev + 1) % testimonials.length : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      testimonials.length > 0 ? (prev + 1) % testimonials.length : 0
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      testimonials.length > 0
        ? prev === 0
          ? testimonials.length - 1
          : prev - 1
        : 0
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            component="h1"
            color="rgba(47, 29, 25, 1)"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: "1.2rem", md: "2rem" } }}
          >
            Few smiles and comments
          </Typography>
          <Typography
            variant="subtitle1"
            color="rgba(177, 140, 94, 1)"
            sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
          >
            See the difference we make
          </Typography>
        </Box>

        {testimonial && (
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexDirection: isMobile ? "column" : "row" }}
          >
            {/* Left Arrow */}
            {!isMobile && (
              <Grid
                item
                xs={12}
                sm={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton onClick={prevTestimonial}>
                  <ArrowBack sx={{ color: "rgba(177, 140, 94, 1)" }} />
                </IconButton>
              </Grid>
            )}

            {/* Content Section */}
            <Grid
              item
              xs={12}
              sm={10}
              container
              spacing={2}
              sx={{
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: { xs: 3, md: 0 },
                }}
              >
                <Box
                  component="img"
                  src={testimonial.image}
                  alt={testimonial.author}
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: 2,
                    maxHeight: { xs: 300, md: 480 },
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isMobile ? "center" : "flex-start",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <Box
                  component="img"
                  src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480361/quoteImage_kfmvlf.png"
                  alt="Quote Icon"
                  sx={{
                    height: { xs: 20, md: 28 },
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h4"
                  component="blockquote"
                  color="rgba(47, 29, 25, 1)"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  {testimonial.quote}
                </Typography>
                <Typography
                  variant="body1"
                  color="rgba(177, 140, 94, 1)"
                  sx={{
                    mb: 1,
                    fontStyle: "italic",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {testimonial.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="rgba(47, 29, 25, 1)"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  {testimonial.author}
                </Typography>
                <Typography
                  variant="body2"
                  color="rgba(177, 140, 94, 1)"
                  sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                >
                  {testimonial.role}
                </Typography>
              </Grid>
            </Grid>

            {/* Right Arrow */}
            {!isMobile && (
              <Grid
                item
                xs={12}
                sm={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton onClick={nextTestimonial}>
                  <ArrowForward sx={{ color: "rgba(177, 140, 94, 1)" }} />
                </IconButton>
              </Grid>
            )}

            {/* Mobile Arrows */}
            {isMobile && (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <IconButton onClick={prevTestimonial}>
                  <ArrowBack sx={{ color: "rgba(177, 140, 94, 1)" }} />
                </IconButton>
                <IconButton onClick={nextTestimonial}>
                  <ArrowForward sx={{ color: "rgba(177, 140, 94, 1)" }} />
                </IconButton>
              </Grid>
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Testimonial;