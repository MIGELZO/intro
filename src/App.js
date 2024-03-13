import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box } from "@mui/material";
import CardPage from "./cards/components/CardPage";


function app() {
  return (
    <Box className="App">
      <CardPage/>
    </Box>
  );
}

export default app;