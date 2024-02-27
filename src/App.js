import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box } from "@mui/material";
import CardComponent from "./components/CardComponent";

function app() {
  return <Box>
    <div className="App">
      <CardComponent/>
    </div>
  </Box>;
}

export default app;
