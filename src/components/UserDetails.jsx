import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function UserDetails() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: 2,
        borderRadius: 5,
        p: 3,
      }}
    >
      <Typography>User details:</Typography>
      <TextField
        label="Email:"
        type="email"
        variant="outlined"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
      <TextField
        label="Password:"
        type="password"
        variant="outlined"
        value={user.password}
        name="password"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={(e) => {
          console.log(user);
        }}
      >
        Enter
      </Button>
    </Box>
  );
}
