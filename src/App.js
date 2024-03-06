import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box } from "@mui/material";
import Counter from "./components/Counter";



function app() {
 
  return (
    <Box className="App">
      <Counter/>
    </Box>
  );
}

export default app;
