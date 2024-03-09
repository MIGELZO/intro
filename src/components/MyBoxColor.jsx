import { Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function MyBoxColor() {
  const [color, setColor] = useState("red");

  const changeStyle = () => {
    color === "red" ? setColor("blue") : setColor("red");
  };

  return (
    <>
      <Box sx={{ bgcolor: color, height: 100, width: 100, mb: 5 }}></Box>
      <Button variant="contained" onClick={changeStyle}>
        Change color
      </Button>
    </>
  );
}
