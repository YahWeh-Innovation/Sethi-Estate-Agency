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
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          About Us
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
          A Trusted Name in Real Estate Since 1991
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, sm: 3 }}
          sx={{
            justifyContent: "center",
            alignItems: "start",
            paddingBottom: "80px",
          }}
        >
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
                At Sethi Estate Agency, we believe that real estate is more than
                just buying and selling properties—it’s about building dreams,
                securing futures, and making investments that last a lifetime.
                Since 1991, we have been a trusted name in the real estate
                industry, helping individuals, families, and businesses find the
                perfect property that aligns with their needs and aspirations.
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
                With expertise in residential, commercial, and industrial real
                estate, we offer a carefully curated selection of properties
                that cater to a diverse range of requirements. Whether you’re
                looking for a luxurious home, a strategic commercial space, or a
                valuable industrial plot, we provide seamless end-to-end
                solutions that ensure smooth transactions with complete
                transparency.
              </Typography>

              <Typography
                variant="h6"
                textAlign={"start"}
                fontWeight="bold"
                sx={{ mt: 3, mb: 2 }}
              >
                Why Choose Us?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: 1,
                }}
              >
                <strong sx={{ color: "black !important" }}>
                  Unmatched Market Expertise –
                </strong>{" "}
                With decades of experience, we have an in-depth understanding of
                property trends, pricing, and legal frameworks, ensuring you
                make informed and profitable decisions.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: 1,
                }}
              >
                <strong>Personalized Service –</strong> Every client is unique,
                and so are their needs. Our dedicated team works closely with
                you to find the best property that fits your vision.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: 1,
                }}
              >
                <strong>Integrity & Trust –</strong> Built on a foundation of
                honesty and professionalism, we prioritize our clients'
                interests, ensuring fair dealings and genuine advice.
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
                <strong>Strong Network & Visibility –</strong> We connect buyers
                and sellers through our extensive network, ensuring your
                property gets the attention it deserves. Over the years, we have
                helped countless clients turn their real estate goals into
                reality. As a company rooted in trust, integrity, and
                excellence, we continue to set new benchmarks in the industry,
                making property transactions effortless and rewarding for all.
              </Typography>
              <Typography
                variant="h6"
                textAlign={"start"}
                fontWeight="bold"
                color="rgba(47, 29, 25, 1)"
                sx={{ mt: 3 }}
              >
                Let’s find the perfect property for you—because your dream space
                is just a decision away!
              </Typography>
            </Box>
          </Grid>

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
                  src="https://res.cloudinary.com/dfmjqggmq/image/upload/v1738310100/WhatsApp_Image_2025-01-31_at_12.26.06_iu0tv9.jpg"
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
                  Anmol Bansal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px" },
                    color: "text.secondary",
                  }}
                >
                  (Director)
                </Typography>
              </Box>

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
                  src="https://res.cloudinary.com/dfmjqggmq/image/upload/v1738310100/WhatsApp_Image_2025-01-31_at_12.27.38_gtsvrv.jpg"
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
                  Karan Sethi
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px" },
                    color: "text.secondary",
                  }}
                >
                  (Director)
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
