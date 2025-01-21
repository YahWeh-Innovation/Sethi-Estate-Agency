import React, { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Box = ({ children, sx }) => <div style={sx}>{children}</div>;

const Testimonial = () => {
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
      testimonials.length > 0 ? (prev === 0 ? testimonials.length - 1 : prev - 1) : 0
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px 0",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2F1D19" }}>
          Few smiles and comments
        </h1>
        <p style={{ fontSize: "1rem", color: "#B18C5E" }}>
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <button
          onClick={prevTestimonial}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <ArrowBack style={{ color: "#B18C5E", fontSize: "30px" }} />
        </button>
        {testimonial && (
          <Box sx={{ display: "flex", alignItems: "center", width: "80%" }}>
            <Box sx={{ flex: 1 }}>
              <img
                src={testimonial.image}
                alt={testimonial.author}
                style={{
                  maxWidth: "480px",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box sx={{ flex: 2, maxWidth: "45%" }}>
              <img
                src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480361/quoteImage_kfmvlf.png"
                height={28}
                alt="Quote Icon"
              />
              <blockquote
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#2F1D19",
                  margin: "20px 0",
                }}
              >
                {testimonial.quote}
              </blockquote>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#B18C5E",
                  fontWeight: "lighter",
                  margin: "10px 0",
                }}
              >
                {testimonial.description}
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#2F1D19",
                }}
              >
                {testimonial.author}
              </p>
              <p style={{ fontSize: "1rem", color: "#B18C5E" }}>
                {testimonial.role}
              </p>
            </Box>
          </Box>
        )}
        <button
          onClick={nextTestimonial}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <ArrowForward style={{ color: "#B18C5E", fontSize: "32px" }} />
        </button>
      </Box>
    </Box>
  );
};

export default Testimonial;