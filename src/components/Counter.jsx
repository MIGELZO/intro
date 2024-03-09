import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev)=>prev+1);
    setCounter((prev)=>prev+1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <Box>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography variant="h1">{counter}</Typography>
    </Box>
  );
}
