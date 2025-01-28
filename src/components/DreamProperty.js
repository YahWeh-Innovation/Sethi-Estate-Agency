import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import DreamPropertyCard from "./DreamPropertyCard";

const DreamProperty = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties/getDreamProperty");
        setCardData(response.data.successMessage.data.properties);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties..");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" marginY={8}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" marginY={8}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Box sx={{ textAlign: "center", paddingY: "16px" }}>
        <Typography
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: {
              xs: "20px",
              sm: "24px",
              md: "36px",
              lg: "40px",
              xl: "44px",
            },
            padding: "0px 16px",
          }}
        >
          Find Your Property
        </Typography>
        <Typography
          variant="subtitle1"
          color="rgba(177, 140, 94, 1)"
          sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
        >
          Browse top listings and uncover the best options in your preferred locations.
        </Typography>
      </Box>
      <Box marginY={1}>
        <Grid container>
          {cardData.map((data, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <DreamPropertyCard cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DreamProperty;
