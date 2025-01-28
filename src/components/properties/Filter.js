import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Slider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";

const citiesInIndia = ["Gurugram", "Faridabad", "Noida"];
const propertyTypes = ["Residential", "Commercial"];

// Constants for price ranges in rupees
const PRICE_RANGES = [
  { min: 0, max: 10000 },           // 0 - 10K
  { min: 10000, max: 100000 },      // 10K - 1L
  { min: 100000, max: 1000000 },    // 1L - 10L
  { min: 1000000, max: 10000000 },  // 10L - 1Cr
  { min: 10000000, max: 20000000 }, // 1Cr - 2Cr
];

const valueToPrice = (value) => {
  // Each segment is 20% (value 0-100 split into 5 parts)
  const segment = Math.floor(value / 20);
  const segmentValue = value % 20;
  
  // If we're at the max value, return the maximum price
  if (value === 100) return PRICE_RANGES[4].max;
  
  // Get the current range
  const range = PRICE_RANGES[segment];
  
  // Calculate price within the segment
  const segmentRatio = segmentValue / 20;
  const segmentPrice = range.min + (range.max - range.min) * segmentRatio;
  
  return Math.round(segmentPrice);
};

const priceToValue = (price) => {
  // Find which segment the price falls into
  const segment = PRICE_RANGES.findIndex(range => price <= range.max);
  
  if (segment === -1) return 100; // If price is above max, return max value
  
  const range = PRICE_RANGES[segment];
  const segmentRatio = (price - range.min) / (range.max - range.min);
  
  // Convert to slider value (each segment is 20 units wide)
  return Math.min(segment * 20 + segmentRatio * 20, 100);
};

const formatPrice = (price) => {
  if (price >= 10000000) return `${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `${(price / 100000).toFixed(2)} L`;
  if (price >= 1000) return `${(price / 1000).toFixed(2)} K`;
  return price.toString();
};

export default function Filter({ filters, onFilterChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tempFilters, setTempFilters] = useState(filters);
  const [isModified, setIsModified] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setIsModified(JSON.stringify(tempFilters) !== JSON.stringify(filters));
  }, [tempFilters, filters]);

  const handleChange = (e) => {
    setTempFilters({ ...tempFilters, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (event, newValue) => {
    setTempFilters({
      ...tempFilters,
      priceRange: [valueToPrice(newValue[0]), valueToPrice(newValue[1])],
    });
  };

  const handleResetFilter = () => {
    const resetFilters = {
      city: "",
      type: "",
      priceRange: [PRICE_RANGES[0].min, PRICE_RANGES[4].max],
    };
    setTempFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const handleModifyClick = () => {
    onFilterChange(tempFilters);
    setIsModified(false);
    setDrawerOpen(false);
  };

  const valueLabelFormat = (value) => {
    return formatPrice(valueToPrice(value));
  };

  const marks = [
    { value: 0, label: '0' },
    { value: 20, label: '10K' },
    { value: 40, label: '1L' },
    { value: 60, label: '10L' },
    { value: 80, label: '1Cr' },
    { value: 100, label: '2Cr' },
  ];

  return (
    <>
      {isMobile ? (
        <Box>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <FilterListIcon
              fontSize="large"
              sx={{
                padding: "10px",
                backgroundColor: "rgba(235, 228, 214, 1)",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            marginTop: "72px",
            padding: 2,
            position: "fixed",
            top: 0,
            backgroundColor: "#fff",
            zIndex: 20,
            boxShadow: "0px 0.05px 10px gray",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Location (City)</InputLabel>
                <Select
                  name="city"
                  value={tempFilters.city}
                  onChange={handleChange}
                  label="Location (City)"
                >
                  {citiesInIndia.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  name="type"
                  value={tempFilters.type}
                  onChange={handleChange}
                  label="Type"
                >
                  {propertyTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography gutterBottom>Price Range (₹)</Typography>
              <Slider
                value={[
                  priceToValue(tempFilters.priceRange[0]),
                  priceToValue(tempFilters.priceRange[1]),
                ]}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                marks={marks}
                min={0}
                max={100}
                step={0.1}
              />
            </Grid>

            <Grid item xs={12} sm={2} sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                disabled={!isModified}
                onClick={handleModifyClick}
              >
                Modify
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleResetFilter}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={3}>
          <Typography variant="h6" textAlign="center" gutterBottom>
            Filters
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Location (City)</InputLabel>
                <Select
                  name="city"
                  value={tempFilters.city}
                  onChange={handleChange}
                  label="Location (City)"
                >
                  {citiesInIndia.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  name="type"
                  value={tempFilters.type}
                  onChange={handleChange}
                  label="Type"
                >
                  {propertyTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>Price Range (₹)</Typography>
              <Slider
                value={[
                  priceToValue(tempFilters.priceRange[0]),
                  priceToValue(tempFilters.priceRange[1]),
                ]}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                marks={marks}
                min={0}
                max={100}
                step={0.1}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleModifyClick}
                fullWidth
              >
                Apply Filters
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}