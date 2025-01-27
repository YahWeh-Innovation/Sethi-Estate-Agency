import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import ImageTile from "../../components/properties/ImagesTiles";
import RoomIcon from "@mui/icons-material/Room";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CircleIcon from "@mui/icons-material/Circle";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import axios from "axios";
import LatestProperty from "../../components/LatestProperty";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PropertiesSideBar from "../../components/properties/propertiesSideBar";
const propertyPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { slug } = router.query;

  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPropertyData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/properties/get", {
          params: { slug: slug },
          headers: { "Content-Type": "application/json" },
        });
        setPropertyData(response.data.successMessage.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [slug]);

  const infoItems = [
    { icon: <CircleIcon />, text: propertyData?.status || "Active" },
    {
      icon: <BedIcon />,
      text: `${propertyData?.details?.noOfBedRoom || 0} Beds`,
    },
    {
      icon: <BathtubIcon />,
      text: `${propertyData?.details?.noOfBathroom || 0} Baths`,
    },
    {
      icon: <AspectRatioIcon />,
      text: `${propertyData?.area?.total || 0} sqft`,
    },
    { icon: <HomeIcon />, text: propertyData?.type || "Residential" },
    {
      icon: <CalendarTodayIcon />,
      text: `Built in ${
        new Date(propertyData?.yearBuilt).getFullYear() || 2016
      }`,
    },
  ];

  return (
    <Box>
      <Box sx={{ margin: "72px" }}>
        <Navbar />
      </Box>
      <Box
        padding={isSmallScreen ? 1 : 4}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          propertyData && (
            <>
              <Box>
                <ImageTile images={propertyData.imageUrl} />
              </Box>
              <Box
                marginY={2}
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                }}
              >
                <Box width={isSmallScreen ? "100%" : "75%"}>
                  <Box width="100%" borderBottom="1px solid gray">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                        flexWrap: isSmallScreen ? "wrap" : "nowrap",
                      }}
                    >
                      <RoomIcon />
                      <Typography
                        variant="h5"
                        component="h5"
                        sx={{ fontWeight: 900 }}
                      >
                        {propertyData.address?.street},{" "}
                        {propertyData.address?.city},{" "}
                        {propertyData.address?.state}
                      </Typography>
                    </Box>

                    <Box
                      marginY={2}
                      sx={{
                        display: "flex",
                        flexDirection: isSmallScreen ? "column" : "row",
                      }}
                    >
                      <Box width={isSmallScreen ? "100%" : "50%"}>
                        <Typography sx={{ color: "gray", fontSize: "14px" }}>
                          Start From &#8377; {propertyData.price}
                        </Typography>
                      </Box>
                      <Box
                        width={isSmallScreen ? "100%" : "50%"}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 1,
                          justifyContent: isSmallScreen
                            ? "flex-start"
                            : "center",
                          color: "gray",
                        }}
                      >
                        <AspectRatioIcon />
                        {propertyData.area?.total} sqft
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: isSmallScreen ? "column" : "row",
                    }}
                  >
                    <Box paddingY={2} width={isSmallScreen ? "100%" : "30%"}>
                      <Stack spacing={3}>
                        {infoItems.map((item, index) => (
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            key={index}
                          >
                            {item.icon}
                            <Typography fontWeight={900} variant="body1">
                              {item.text}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                    <Box paddingTop={2} width={isSmallScreen ? "100%" : "70%"}>
                      <Typography
                        fontWeight={500}
                        variant="h5"
                        component="h5"
                        sx={{ fontWeight: "900", color: "black" }}
                      >
                        Property Description
                      </Typography>
                      <Typography
                        paragraph
                        color="gray"
                        dangerouslySetInnerHTML={{
                          __html: propertyData.description,
                        }}
                      />
                      <Box marginTop={6}>
                        <Box>
                          <Typography fontSize="14px" fontWeight={900}>
                            {new Date(
                              propertyData.yearBuilt
                            ).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </Typography>
                          <Typography fontSize="14px" color="gray">
                            LISTED
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  width={isSmallScreen ? "100%" : "25%"}
                  marginTop={isSmallScreen ? 4 : 0}
                >
                  <Typography
                    fontWeight={500}
                    variant="h5"
                    component="h5"
                    sx={{
                      paddingLeft: { xs: "0px", md: "32px" },
                      marginTop: { xs: "0px", md: 4 },
                    }}
                  >
                    Latest Properties
                  </Typography>
                  <Box>
                    <PropertiesSideBar />
                  </Box>
                </Box>
              </Box>
            </>
          )
        )}
      </Box>
      {loading ? (
        <Typography></Typography>
      ) : (
        <Box>
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default propertyPage;
