import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box } from "@mui/material";
import MyBoxSize from "./components/MyBoxSize";


function app() {
  return (
    <Box className="App">
      <MyBoxSize/>
    </Box>
  );
}

export default app;
