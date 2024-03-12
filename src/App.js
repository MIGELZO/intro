import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box } from "@mui/material";
import RegistrationForm from "./components/RegistrationForm";


function app() {
  return (
    <Box className="App">
      <RegistrationForm/>
    </Box>
  );
}

export default app;