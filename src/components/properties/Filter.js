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

const PRICE_RANGES = [
  { min: 0, max: 5000000 },           
  { min: 5000000, max: 10000000 },    
  { min: 10000000, max: 50000000 },   
  { min: 50000000, max: 100000000 }, 
  { min: 100000000, max: 2000000000 }
];

const valueToPrice = (value) => {
  const segment = Math.floor(value / 20);
  const segmentValue = value % 20;

  if (value === 100) return PRICE_RANGES[4].max;

  const range = PRICE_RANGES[segment];
  const segmentRatio = segmentValue / 20;
  return Math.round(range.min + (range.max - range.min) * segmentRatio);
};

const priceToValue = (price) => {
  const segment = PRICE_RANGES.findIndex(range => price <= range.max);
  if (segment === -1) return 100;

  const range = PRICE_RANGES[segment];
  const segmentRatio = (price - range.min) / (range.max - range.min);
  return Math.min(segment * 20 + segmentRatio * 20, 100);
};

const formatPrice = (price) => {
  if (price >= 100000000) return `${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `${(price / 100000).toFixed(2)} L`;
  return `${price.toLocaleString()}`;
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
    { value: 0, label: "0" },
    { value: 20, label: "50L" },
    { value: 40, label: "1Cr" },
    { value: 60, label: "5Cr" },
    { value: 80, label: "10Cr" },
    { value: 100, label: "200Cr" },
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
          <Button variant="contained" color="primary" onClick={handleModifyClick} fullWidth>
            Apply Filters
          </Button>
        </Box>
      </Drawer>
    </>
  );
}