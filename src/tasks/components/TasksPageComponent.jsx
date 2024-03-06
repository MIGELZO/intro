import React from "react";
import TaskHeadComponent from "./TaskHeadComponent";
import { Paper, Table, TableContainer, Typography } from "@mui/material";
import TaskComponent from "./TaskComponent";

const tasks = [
  { name: "משימה 1", date: "03-03-2024", type: "שיעורי בית" },
  { name: "משימה 2", date: "04-03-2024", type: "ניקיון" },
  { name: "משימה 3", date: "05-03-2024", type: "שיעורי בית" },
  { name: "משימה 4", date: "06-03-2024", type: "שיעורי בית" },
  { name: "משימה 5", date: "07-03-2024", type: "ניקיון" },
  { name: "משימה 6", date: "08-03-2024", type: "מחקר" },
  { name: "משימה 7", date: "09-03-2024", type: "מחקר" },
  { name: "משימה 8", date: "10-03-2024", type: "מחקר" },
];

const search = "ק";

export default function TaskPageComponent() {
  return tasks.length !== 0 ? (
    <TableContainer component={Paper} sx={{ width: 700, m: 2 }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TaskHeadComponent />
        {tasks.map((tasks) =>
          tasks.type.includes(search) ? <TaskComponent task={tasks} /> : null
        )}
      </Table>
    </TableContainer>
  ) : (
    <Typography>Oops… it seems there are no missions to display</Typography>
  );
}
