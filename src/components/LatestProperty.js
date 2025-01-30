import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const LatestProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} L`;
    } else if (price >= 1000) {
      return `${(price / 1000).toFixed(1)} K`;
    } else {
      return `₹${price.toLocaleString("en-IN")}`;
    }
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties/get", {
          params: { latest: true },
        });
        setProperties(
          response.data.successMessage.data.latestProperty.properties
        );
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
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
            marginTop:{xs:2,md:8}
          }}
        >
          Explore Our Properties
        </Typography>
        <Typography
          variant="subtitle1"
          color="rgba(177, 140, 94, 1)"
          sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
        >
          Discover your perfect space – from dream homes to prime investments
        </Typography>
      </Box>
      <Box
        marginY={2}
        sx={{
          display: "flex",
          gap: "20px",
          padding: "48px 24px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          backgroundColor: "rgba(47, 29, 25, 1)",
        }}
        ref={scrollRef}
      >
        {properties.map((property) => (
          <Card
            key={property._id}
            sx={{
              minWidth: "300px",
              flexShrink: 0,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Link href={`properties/${property.slug}`}>
              <CardMedia
                component="img"
                height="200"
                image={property.imageUrl[0].URL}
                alt={property.name}
              />
            </Link>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {property.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ₹ {formatPrice(property.price)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {property.area.total} {property.area.unit}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-10px", md: "10%" },
          right: "5%",
          display: { xs: "none", sm: "flex" },
          gap: "10px",
        }}
      >
        <IconButton
          onClick={() => handleScroll("left")}
          sx={{
            color: "rgba(177, 140, 94, 1)",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <WestIcon />
        </IconButton>
        <IconButton
          onClick={() => handleScroll("right")}
          sx={{
            color: "rgba(177, 140, 94, 1)",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <EastIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LatestProperty;
