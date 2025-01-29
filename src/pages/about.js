import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <Box>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          textAlign: "center",
          maxWidth: "1500px",
          margin: "64px auto",
        }}
      >
        {/* Header Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          About us
        </Typography>
        <Typography
          variant="h5"
          fontWeight="medium"
          sx={{
            mb: 3,
            color: "text.secondary",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
          }}
        >
          Your journey to homeownership starts here.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 3, sm: 4, md: 5 },
            maxWidth: "700px",
            margin: "auto",
            color: "text.secondary",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
          Real estate is an imperishable asset, ever increasing in value. It is
          the most solid security that the investor can acquire.
        </Typography>

        {/* Main Content Grid */}
        <Grid
          container
          spacing={{ xs: 4, sm: 3 }}
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
            paddingBottom: "80px",
          }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                px: { xs: 1, sm: 2, md: 3 },
                maxWidth: { xs: "100%", md: "90%" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: 2,
                }}
              >
                Welcome to Sethi Estate Agency, where we serve as your trusted
                matchmaker in securing your ideal property. We offer a carefully
                curated portfolio of properties, tailored to your distinct
                preferences, ensuring a seamless buying and selling experience.
                From luxury residences to cozy retreats, our expert team pairs
                you with your ideal space.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: 2,
                }}
              >
                Founded in year, with over years of experience navigating the
                dynamic landscape of the property market, Sethi Estate Agency
                has established itself as a beacon of trust, expertise and
                excellence. Our unparalleled local knowledge and commitment to
                exceptional customer service guarantee that the properties we
                represent get the spotlight they deserve.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                Our growth is fueled by a culture that values integrity,
                tradition, and customer satisfaction. Guided by these
                principles, we strive to become your go-to experts in
                residential sales, market analysis, and commercial investments
              </Typography>
            </Box>
          </Grid>

          {/* Images Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "unset" },
                position: "relative",
                width: { xs: "280px", sm: "300px", md: "320px" },
                height: { xs: "auto", md: "380px" },
                margin: "auto",
                gap: { xs: "2rem", md: 0 },
              }}
            >
              {/* First Image Component */}
              <Box
                sx={{
                  position: { xs: "relative", md: "absolute" },
                  top: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Vikrant Rana"
                  sx={{
                    width: { xs: "240px", sm: "260px", md: "280px" },
                    height: { xs: "270px", sm: "290px", md: "310px" },
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: 3,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontSize: { xs: "13px", sm: "14px" },
                    fontWeight: "bold",
                  }}
                >
                  Vikrant Rana
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px" },
                    color: "text.secondary",
                  }}
                >
                  Co-Founder
                </Typography>
              </Box>

              {/* Second Image Component */}
              <Box
                sx={{
                  position: { xs: "relative", md: "absolute" },
                  bottom: { md: "-15%" },
                  left: { md: "-50%" },
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Eshant Ujjwal"
                  sx={{
                    border: "3px solid white",
                    width: { xs: "240px", sm: "260px", md: "280px" },
                    height: { xs: "270px", sm: "290px", md: "310px" },
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: 3,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontSize: { xs: "13px", sm: "14px" },
                    fontWeight: "bold",
                  }}
                >
                  Eshant Ujjwal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px" },
                    color: "text.secondary",
                  }}
                >
                  Co-Founder
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default AboutUs;
