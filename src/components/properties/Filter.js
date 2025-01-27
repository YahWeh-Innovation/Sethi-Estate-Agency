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

const citiesInIndia = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
const propertyTypes = ["Residential", "Commercial"];

const valueToPrice = (value) => {
  if (value <= 25) return 1000 + (value / 25) * 9000;
  if (value <= 50) return 10000 + ((value - 25) / 25) * 90000;
  if (value <= 75) return 100000 + ((value - 50) / 25) * 900000;
  return 1000000 + ((value - 75) / 25) * 99000000;
};

const priceToValue = (price) => {
  if (price <= 10000) return ((price - 1000) / 9000) * 25;
  if (price <= 100000) return 25 + ((price - 10000) / 90000) * 25;
  if (price <= 1000000) return 50 + ((price - 100000) / 900000) * 25;
  return 75 + ((price - 1000000) / 99000000) * 25;
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
    const resetFilters = { city: "", type: "", priceRange: [1000, 100000000] };
    setTempFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const handleModifyClick = () => {
    onFilterChange(tempFilters);
    setIsModified(false);
    setDrawerOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <Box sx={{}}>
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
