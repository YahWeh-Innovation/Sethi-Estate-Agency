import React from "react";
import { Box, Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

export default function BlogNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "50px",
        marginTop: "100px",
      }}
    >
      <ArticleIcon sx={{ fontSize: 80, color: "#8F90A6", marginBottom: 2 }} />
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "20px", color: "#2F1D19" }}
      >
        No Blogs Found!
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "40px", color: "#8F90A6" }}
      >
        We couldn't find any blogs matching your search. Please check back later for new updates.
      </Typography>
    </Box>
  );
}
