import { Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function MyBoxSize() {
  const [size, setSize] = useState({ width: 10, height: 10 });

  const sizeUp = () => {
    size.height < 200
      ? setSize((prev) => ({
          height: prev.height + 10,
          width: prev.width + 10,
        }))
      : (size.height = 200);
    size.width = 200;
  };

  const sizeDown = () => {
    size.height > 10
      ? setSize((prev) => ({
          height: prev.height - 10,
          width: prev.width - 10,
        }))
      : (size.height = 10);
    size.width = 10;
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#8900FF",
          height: size.height,
          width: size.width,
          mb: 5,
        }}
      ></Box>
      <Box sx={{display: 'flex', gap:2}}>
      <Button variant="contained" onClick={sizeUp}>
        +
      </Button>
      <Button variant="contained" onClick={sizeDown}>
        -
      </Button>
      </Box>
    </>
  );
}
