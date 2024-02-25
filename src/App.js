import { Box, Button, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
  return (
    <Box sx={{display:'flex',justifyContent:"center"}}>
      <Typography variant="h3" component="h1">
        Hello
      </Typography>
      <Button variant="contained">click me</Button>
    </Box>
  );
}

export default App;
