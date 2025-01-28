import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import LocationSelector from "./LocationSelector";
import ContactOptions from "./ContactOptions";

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        margin: { xs: "64px 0px", md: "72px 0px" },
        padding: { xs: "24px 24px", md: "48px 84px" },
        backgroundImage:
          "url('https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480349/hero_pjv4yv.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              fontSize: {
                xs: "40px",
                sm: "44px",
                md: "36px",
                lg: "60px",
                xl: "72px",
              },
            }}
          >
            Where Smart Living
            <br /> Meets Modern Elegance
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Discover thoughtfully curated properties that blend style, comfort,
            and convenience—perfect for today's discerning buyers and investors.
          </Typography>

          <LocationSelector />

          <ContactOptions sx={{ marginTop: 4 }} />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage:
                "url('https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480362/heroimg_dbtrqs.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "5%",
              width: "80%",
              paddingTop: "60%",
              border: "12px solid rgba(250,250,250,0.3)",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
