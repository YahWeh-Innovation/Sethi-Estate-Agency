import React from "react";
import { Box, Grid, Typography, Link, IconButton, Stack } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";
import TermsAndConditionsPopup from "./TermsAndConditionsPopup";
import PrivacyPolicyPopup from "./PrivacyPolicyPopop";
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#2B211F",
        color: "rgb(245, 225, 225)",
        px: { xs: 2, sm: 4, md: 12 },
        marginTop: 2,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "18px" } }}
          >
            SETHI ESTATE AGENCY
          </Typography>
          <Box>
            <Typography
              variant="body2"
              display="flex"
              alignItems="center"
              gutterBottom
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              <LocationOn fontSize="small" sx={{ mr: 1 }} />
              D-77, Sector 85, Faridabad, Haryana, 121002
            </Typography>
            <Typography
              variant="body2"
              display="flex"
              alignItems="center"
              gutterBottom
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              <Phone fontSize="small" sx={{ mr: 1 }} />
              <a
                href="tel:+91-9990624500"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +91-9990624500
              </a>
            </Typography>
            <Typography
              variant="body2"
              display="flex"
              alignItems="center"
              gutterBottom
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              <Email fontSize="small" sx={{ mr: 1 }} />
              <a
                href="mailto:contactus@sethiestateagency.in"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                contactus@sethiestateagency.in
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "18px" } }}
          >
            QUICK LINKS
          </Typography>
          <Box>
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Properties", href: "/properties" },
              { label: "Blogs", href: "/blogs" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  "&:hover": { color: "gray" },
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    fontSize: "14px",
                    "&:hover": { color: "gray" },
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "18px" } }}
          >
            LEGAL LINKS
          </Typography>
          <Stack
            direction={{ xs: "column", md: "column" }}
            justifyContent="start"
            alignItems="start"
            spacing={1}
            fontSize={"14px"}
            sx={{ flexGrow: 1 }}
          >
            <TermsAndConditionsPopup />
            <PrivacyPolicyPopup />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "18px" } }}
          >
            SOCIAL MEDIA
          </Typography>
          <Box display="flex" gap={2}>
            <IconButton
              target="_blank"
              href="https://www.facebook.com/share/1DoZ4SNSZk/"
              sx={{ color: "inherit", fontSize: { xs: "18px", sm: "24px" } }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.instagram.com/sethi_estate_agency?igsh=a2V3bTFyNW1iazJo"
              sx={{ color: "inherit", fontSize: { xs: "18px", sm: "24px" } }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.youtube.com/channel/UC92Qj9NNxopwCuPltUH0cWA"
              sx={{ color: "inherit", fontSize: { xs: "18px", sm: "24px" } }}
            >
              <YouTube />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/karan-sethi-b0000b34a/"
              sx={{ color: "inherit", fontSize: { xs: "18px", sm: "24px" } }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 4,
          fontSize: { xs: "12px", sm: "14px" },
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        Copyright © 2024 Sethi Estate Agency
      </Typography>
    </Box>
  );
}
