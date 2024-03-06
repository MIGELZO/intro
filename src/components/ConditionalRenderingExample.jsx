import { Typography } from "@mui/material";
import React from "react";

const user = {
  name: "Daniel",
  email: "G@G.COM",
};

// const user = null

export default function ConditionalRenderingExample() {
  return user ? (
    <Typography>welcome {user.name}</Typography>
  ) : (
    <Typography>
      Access denied - this page is for registered users only
    </Typography>
  );
}
