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
import { useRouter } from "next/router";

const Search = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [sliderValue, setSliderValue] = useState([0, 100]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const router = useRouter();

  const priceSegments = [
    { range: [0, 10000], start: 0, end: 20 },
    { range: [10000, 100000], start: 20, end: 40 },
    { range: [100000, 1000000], start: 40, end: 60 },
    { range: [1000000, 10000000], start: 60, end: 80 },
    { range: [10000000, 20000000], start: 80, end: 100 },
  ];

  const mapSliderToPrice = (value) => {
    for (let segment of priceSegments) {
      if (value >= segment.start && value <= segment.end) {
        const percentInSegment =
          (value - segment.start) / (segment.end - segment.start);
        return Math.round(
          segment.range[0] +
            percentInSegment * (segment.range[1] - segment.range[0])
        );
      }
    }
    return 0;
  };

  const mapPriceToSlider = (price) => {
    for (let segment of priceSegments) {
      if (price >= segment.range[0] && price <= segment.range[1]) {
        const percentInSegment =
          (price - segment.range[0]) / (segment.range[1] - segment.range[0]);
        return segment.start + percentInSegment * (segment.end - segment.start);
      }
    }
    return 0;
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleGo = () => {
    setAnchorEl(null);
    const minPrice = mapSliderToPrice(sliderValue[0]);
    const maxPrice = mapSliderToPrice(sliderValue[1]);
    setSelectedPriceRange(
      `₹${formatPrice(minPrice)} - ₹${formatPrice(maxPrice)}`
    );
  };

  const formatPrice = (value) => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
    return `${value.toLocaleString()}`;
  };

  const handleSearch = () => {
    const minPrice = mapSliderToPrice(sliderValue[0]);
    const maxPrice = mapSliderToPrice(sliderValue[1]);
    console.log("Price Range:", `${minPrice} - ${maxPrice}`);
    router.push({
      pathname: "/properties",
      query: {
        location: selectedLocation || "any",
        type: selectedPropertyType || "any",
        priceRange: [`${minPrice}`, `${maxPrice}`],
      },
    });
  };

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
        spacing={{ xs: 1, md: 2 }}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "", md: "center" },
        }}
      >
        <Grid item xs={12} md={3}>
          <Typography
            color="#2f1d19"
            fontWeight="500"
            fontSize={{ xs: "16px", md: "20px" }}
            paddingLeft={{ xs: "4px", md: "4px" }}
          >
            Location
          </Typography>
          <FormControl fullWidth>
            <Select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              displayEmpty
              sx={{
                fontSize: "16px",
                color: "black",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-select": {
                  padding: "10px 4px",
                },
              }}
            >
              <MenuItem value="">Select Your City</MenuItem>
              <MenuItem value="Faridabad">Faridabad</MenuItem>
              <MenuItem value="Gurugram">Gurugram</MenuItem>
              <MenuItem value="Noida">Noida</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography
            color="#2f1d19"
            fontWeight="500"
            fontSize={{ xs: "16px", md: "18px" }}
            paddingLeft={{ xs: "4px", md: "4px" }}
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
                color: "black",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-select": {
                  padding: "10px 4px",
                },
              }}
            >
              <MenuItem value="">Choose Property Type</MenuItem>
              <MenuItem value="Residential">Residential</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3} sx={{ maxWidth: "200px" }}>
          {" "}
          {/* Restrict Grid width */}
          <Typography
            color="#2f1d19"
            fontWeight="500"
            fontSize={{ xs: "16px", md: "18px" }}
            paddingBottom={"4px"}
            paddingLeft={"4px"}
          >
            Price Range
          </Typography>
          <Button
            onClick={(event) => setAnchorEl(event.currentTarget)}
            disableRipple
            sx={{
              color: "black",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              paddingLeft: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%", // Ensure button doesn't stretch beyond Grid width
              display: "block", // Prevent unintended flex behavior
            }}
          >
            {selectedPriceRange || "Choose Price Range"}
          </Button>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            <Box sx={{ width: "300px", padding: "10px" }}>
              <Typography gutterBottom>
                Range: {formatPrice(mapSliderToPrice(sliderValue[0]))} -{" "}
                {formatPrice(mapSliderToPrice(sliderValue[1]))}
              </Typography>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                step={1}
              />
              <Button
                onClick={handleGo}
                fullWidth
                sx={{ mt: 1, backgroundColor: "#a67c52", color: "#fff" }}
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
