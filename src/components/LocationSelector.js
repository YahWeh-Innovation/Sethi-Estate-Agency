import {
  Box,
  Button,
  MenuItem,
  FormControl,
  Select,
  Slider,
  Typography,
  Popover,
  Grid,
} from "@mui/material";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useRouter } from "next/router";

const Search = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200000000]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const router = useRouter();

  const formatPrice = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }
    return `₹${value.toLocaleString()}`;
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get("/api/properties", {
        params: {
          location: selectedLocation,
          propertyType: selectedPropertyType,
          priceRange: selectedPriceRange,
        },
      });

      router.push({
        pathname: "/search-results",
        query: {
          location: selectedLocation,
          propertyType: selectedPropertyType,
          priceRange: selectedPriceRange,
        },
      });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleGo = () => {
    setAnchorEl(null);
    setSelectedPriceRange(`₹${priceRange[0]} - ₹${priceRange[1]}`);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: 2, md: 2 },
        backgroundColor: "rgba(243, 235, 226, 0.8)",
        borderRadius: "12px 12px 12px 0px",
        backdropFilter: "blur(20px)",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems:{xs:"", md:"center"}
        }}
      >
        <Grid item xs={12} md={3}>
          <Typography
            color="#2f1d19"
            fontWeight="500"
            fontSize={{ xs: "16px", md: "18px" }}
            paddingLeft={{xs:"0px",md:"12px"}}
          >
            Location
          </Typography>
          <FormControl fullWidth>
            <Select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                fontSize: "16px",
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              renderValue={(selected) =>
                selected ? (
                  selected
                ) : (
                  <span style={{ color: "#8f8fa5" }}>Select Your City</span>
                )
              }
            >
              <MenuItem value="">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <LocationOnOutlinedIcon sx={{ marginRight: "8px"}} />
                  Select Your City
                </span>
              </MenuItem>
              <MenuItem value="City1">City1</MenuItem>
              <MenuItem value="City2">City2</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography
            color="#2f1d19"
            fontWeight="500"
            fontSize={{ xs: "16px", md: "18px" }}
            paddingLeft={{xs:"0px",md:"12px"}}
          >
            Property Type
          </Typography>
          <FormControl fullWidth>
            <Select
              value={selectedPropertyType}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
              displayEmpty
              sx={{
                fontSize: "16px",
                color: "#8f8fa5",

                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              renderValue={(selected) =>
                selected ? (
                  selected
                ) : (
                  <span style={{ color: "#8f8fa5" }}>Choose Property Type</span>
                )
              }
            >
              <MenuItem value="">Choose Property Type</MenuItem>
              <MenuItem value="Type1">Type1</MenuItem>
              <MenuItem value="Type2">Type2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            color="#2f1d19"
            fontWeight="500"
            fontSize={{ xs: "16px", md: "18px" }}
            paddingBottom={"16px"}
          >
            Price Range
          </Typography>
          <Button
            onClick={(event) => setAnchorEl(event.currentTarget)}
            disableRipple
            sx={{
              fontSize: "16px",
              color: "#8f8fa5",
              padding: "0",
              textTransform: "none",
            }}
          >
            {selectedPriceRange || "Choose Price Range"}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box
              sx={{
                width: "300px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <Typography gutterBottom>
                Range: {formatPrice(priceRange[0])} -{" "}
                {formatPrice(priceRange[1])}
              </Typography>
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={200000000}
                step={500000}
                sx={{
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#fff",
                    border: "2px solid #a67c52",
                  },
                }}
                valueLabelFormat={(value) => formatPrice(value)}
              />
              <Button
                onClick={handleGo}
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: "#a67c52",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#8a6543",
                  },
                }}
              >
                Go
              </Button>
            </Box>
          </Popover>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            onClick={handleSearch}
            fullWidth
            sx={{
              backgroundColor: "#a67c52",
              color: "white",
              fontSize: "16px",
              height: "60px",
              "&:hover": {
                backgroundColor: "#8a6543",
              },
            }}
          >
            Search Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
