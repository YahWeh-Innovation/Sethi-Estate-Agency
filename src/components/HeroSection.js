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
          <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Smart Living Style
            <br />
            For Smart People
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            A better, healthier you! We are the best studio in the area. Our
            studio provides you with personal training and nutrition plans, as
            well as a variety of classes at the studio. A unique experience!
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
