import React, { useState } from "react";
import { Grid, Typography, TextField, Checkbox, Button } from "@mui/material";

const signupSchema = {
  first: "",
  middle: "",
  last: "",
  phone: "",
  email: "",
  password: "",
  imageUrl: "",
  imageAlt: "",
  state: "",
  country: "",
  city: "",
  street: "",
  houseNumber: "",
  zip: "",
  isBusiness: false,
};
const RegistrationForm = () => {

  const [formData, setFormData] = useState(signupSchema);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData(signupSchema);
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Registration Form
        </Typography>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                name="first"
                value={formData.first}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Middle Name"
                name="middle"
                value={formData.middle}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="last"
                value={formData.last}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Image Alt"
                name="imageAlt"
                value={formData.imageAlt}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="House Number"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="ZIP"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Checkbox color="primary" name="isBusiness" onChange={handleChange}/>
              <Typography variant="body2">Is Business</Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="error" fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleReset}
            >
              Reset
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RegistrationForm;
