import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Avatar,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import Link from "next/link";
import { useRouter } from "next/router";

const formatPrice = (price) => {
  if (price >= 10000000) {
    return (price / 10000000).toFixed(2) + "Cr";
  } else if (price >= 100000) {
    return (price / 100000).toFixed(2) + "L";
  } else if (price >= 1000) {
    return (price / 1000).toFixed(2) + "K";
  }
  return price;
};

const Cards = ({ property, index }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/properties/${property.slug}`);
  };

  const truncatedDescription =
    property.description.length > 800
      ? property.description.substring(0, 800) + "..."
      : property.description;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isSmallScreen
          ? "column"
          : `${index % 2 === 0 ? "row" : "row-reverse"}`,
        padding: 2,
        margin: "auto",
        border: "none",
        boxShadow: "none",
        height: isSmallScreen ? "auto" : "50vh",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isSmallScreen ? "100%" : "60%",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar
              src={property.userImage || property.imageUrl?.[0]?.URL || ""}
              alt={property.name}
              sx={{ width: 48, height: 48, mr: 2 }}
            />
            <Typography
              onClick={handleNavigation}
              variant="h6"
              fontWeight="bold"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {property.name}
            </Typography>
          </Box>
          <Box
            onClick={handleNavigation}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {property.address.street}, {property.address.city},
              {property.address.state}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxHeight: isSmallScreen ? "150px" : "250px",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              position: "relative",
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: truncatedDescription,
              }}
            ></span>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            border="10px solid red"
            onClick={handleNavigation}
            sx={{ mt: 2 }}
          >
            Know more
          </Button>

          <Typography
            variant="h4"
            fontWeight="bold"
            color="text.primary"
            mt={2}
            gutterBottom
          >
            &#8377;{formatPrice(property.price)}
          </Typography>
        </CardContent>
      </Box>

      <Box
        sx={{
          width: isSmallScreen ? "100%" : "40%",
          position: "relative",
          height: isSmallScreen ? "300px" : "100%",
        }}
      >
        <Link href={`/properties/${property.slug}`}>
          <CardMedia
            component="img"
            image={property.imageUrl?.[0]?.URL || ""}
            alt="Property Image"
            sx={{
              borderRadius: 2,
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Link>
        {!isSmallScreen ? (
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              right: isSmallScreen ? "unset" : index % 2 === 0 ? "0%" : "unset",
              left: isSmallScreen ? "50%" : index % 2 !== 0 ? "0%" : "unset",
              transform: isSmallScreen ? "translateX(-50%)" : "none",
              backgroundColor: "#EAE5D6",
              padding: "12px 20px",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <DirectionsCarFilledOutlinedIcon />
                <Typography sx={{ marginLeft: "4px", fontWeight: "bold" }}>
                  {property.details?.noOfBedRoom || 0}
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ color: "#888" }}>|</Typography>
              </Grid>

              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <BathtubOutlinedIcon />
                <Typography sx={{ marginLeft: "4px", fontWeight: "bold" }}>
                  {property.details?.noOfBathroom || 0}
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ color: "#888" }}>|</Typography>
              </Grid>

              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <AspectRatioIcon />
                <Typography sx={{ marginLeft: "4px", fontWeight: "bold" }}>
                  {property.area?.total || 0} {property.area?.unit || "sqft"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    </Card>
  );
};

export default Cards;
