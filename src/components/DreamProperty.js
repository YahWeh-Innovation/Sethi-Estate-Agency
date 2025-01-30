import { Box, Grid, Typography } from "@mui/material";
import DreamPropertyCard from "./DreamPropertyCard";
import { useRouter } from "next/router";

const DreamProperty = () => {
  const cardData = [
    {
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Faridabad",
      type: "Residential",
    },
    {
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Faridabad",
      type: "Commercial",
    },
    {
      image: "https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Gurugram",
      type: "Residential",
    },
    {
      image: "https://images.pexels.com/photos/3935354/pexels-photo-3935354.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Gurugram",
      type: "Commercial",
    },
  ];
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
          Browse top listings and uncover the best options in your preferred locations
        </Typography>
      </Box>
      <Box marginY={1}>
        <Grid container>
          {cardData.map((data, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <DreamPropertyCard
                cardData={data}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DreamProperty;
