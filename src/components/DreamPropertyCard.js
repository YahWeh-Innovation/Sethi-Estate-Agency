import { Box, CardMedia, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/router";

const DreamPropertyCard = ({ cardData }) => {
  const { image, location, type } = cardData;
  const router = useRouter();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleCardClick = (location, type) => {
    router.push({
      pathname: "/properties",
      query: { location, type, priceRange: [0, 2000000000] },
    });
  };

  return (
    <Box
      onClick={() => handleCardClick(location, type)}
      sx={{
        position: "relative",
        cursor: "pointer",
        "&:hover .overlay": {
          opacity: isSmallScreen ? 1 : 1,
        },
        "&:hover .image": {
          opacity: isSmallScreen ? 1 : 0.7,
        },
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt="Property Image"
        className="image"
        sx={{
          transition: "opacity 0.3s ease",
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: { xs: 1, md: 0 },
          transition: "opacity 0.5s ease",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LocationOnIcon />
          {type}, {location}
        </Typography>
      </Box>
    </Box>
  );
};

export default DreamPropertyCard;
