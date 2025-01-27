import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Typography, Link } from "@mui/material";

const PropertiesSideBar = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(1)} Cr`; // For crore
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} L`; // For lakh
    } else if (price >= 1000) {
      return `${(price / 1000).toFixed(1)} K`; // For thousand
    } else {
      return `₹${price.toLocaleString("en-IN")}`; // For smaller amounts
    }
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties/get", {
          params: { latest: true, limit: 3 },
        });
        setProperties(response.data.successMessage.data.latestProperty.properties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <Typography>Loading properties...</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: { xs: "0", md: "32px" },
      }}
    >
      {properties.map((property) => (
        <Card
          key={property._id}
          sx={{
            width: "100%",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Link href={`properties/${property.slug}`} underline="none">
            <CardMedia
              component="img"
              height="200"
              image={property.imageUrl[0].URL}
              alt={property.name}
            />
          </Link>
          <CardContent sx={{ backgroundColor: "rgba(210,210,210)" }}>
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
  );
};

export default PropertiesSideBar;