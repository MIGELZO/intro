import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CardComponent from "./cards/components/CardComponent";
import TaskPageComponent from "./tasks/components/TasksPageComponent";
import { Box } from "@mui/material";

function app() {
  const tasks = [
    {
      name: "Complete Assinment 1",
      date: "2024-02-28",
      type: "Homework",
    },
    {
      name: "Complete Assinment 2",
      date: "2024-03-01",
      type: "Project",
    },
  ];
  const card = {
    _id: "63765801e20ed868a69a62c4",
    title: "Name",
    subtitle: "subtitle",
    description: "testing 123",
    phone: "050-0000000",
    email: "test@gmail.com",
    web: "https://www.test.co.il",
    image: {
      url: "https://picsum.photos/300/200",
      alt: "Business card image",
    },
    address: {
      state: "",
      country: "country",
      city: "tel-aviv",
      street: "Shinkin",
      houseNumber: 3,
      zip: 1234,
    },
    bizNumber: 1000000,
    user_id: "63765801e20ed868a69a62c2",
  };
  return (
    <Box className="App">
      <CardComponent card={card} />
      <TaskPageComponent tasks={tasks} />
    </Box>
  );
}

export default app;
