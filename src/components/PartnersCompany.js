import React from "react";
import { Box, Grid, CardMedia } from "@mui/material";

const PartnersCompany = () => {
  const logos = [
    "https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480362/fortune_itdygm.png",
    "https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480362/cnbc_b2zzin.png",
    "https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480362/forbes_qzfyyc.png",
    "https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480362/ft_gbyqra.png",
    "https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480362/wsj_va4jvh.png",
    "https://res.cloudinary.com/dkoezhi9u/image/upload/v1737480362/tc_hawjlp.png"
  ];

  return (
    <Box
      sx={{
        padding: "32px",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {logos.map((logo, index) => (
          <Grid item xs={2} key={index} display="flex" justifyContent="center">
            <Box
              sx={{
                width: "35%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mixBlendMode: "color-burn",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={logo}
                alt={`Logo ${index + 1}`}
                sx={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PartnersCompany;