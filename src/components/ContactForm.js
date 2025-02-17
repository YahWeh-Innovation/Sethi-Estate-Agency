import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters";
    }

    if (formData.lastName && !/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters";
    }

    if (
      formData.email &&
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d+$/.test(formData.number)) {
      newErrors.number = "Phone number should contain only numbers";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post("/api/contact/create", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{ maxWidth: "100%", mt: 5, px: { xs: 2, sm: 4, md: 6 } }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "block" },
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Construction worker"
            sx={{
              width: "100%",
              height: { md: "60vh", lg: "70vh" },
              objectFit: "cover",
              borderRadius: "8px",
              paddingY: "15px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: { xs: "100%", md: 500 }, mx: "auto" }}>
            <Typography
              variant="h4"
              component="h1"
              color="rgba(47, 29, 25, 1)"
              gutterBottom
              fontWeight={900}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              color="rgba(177, 140, 94, 1)"
              gutterBottom
            >
              Looking for your dream property or have inquiries about our
              listings? Fill out the form below, and we'll get back to you
              promptly!
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name (Optional)"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email Address (Optional)"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number *"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  error={!!errors.number}
                  helperText={errors.number}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="What are you looking for? *"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                mt: 3,
                width: "100%",
                margin: "20px 0px !important",
                backgroundColor: "rgba(47, 29, 25, 1) !important",
                color: "white",
                "&:hover": { backgroundColor: "#333" },
                position: "relative",
              }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress
                    size={20}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ color: "white !important", marginRight: 2 }}
                  />
                  <Typography sx={{ color: "white" }}>
                    Submitting...
                  </Typography>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
