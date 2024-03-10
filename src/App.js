import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import UserDetails from "./components/UserDetails";
import { Box } from "@mui/material";

function app() {
  return (
    <Box className="App">
      <UserDetails />
    </Box>
  );
}

export default app;
