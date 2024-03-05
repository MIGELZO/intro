import React from "react";
import TaskHeadComponent from "./TaskHeadComponent";
import { Paper, Table, TableContainer } from "@mui/material";
import TaskComponent from "./TaskComponent";

const tasks = [
  { name: "משימה 1", date: "03-03-2024", type: "שיעורי בית" },
  { name: "משימה 2", date: "04-03-2024", type: "כביסה" },
  { name: "משימה 3", date: "05-03-2024", type: "קניות" },
  { name: "משימה 4", date: "06-03-2024", type: "תיקון" },
  { name: "משימה 5", date: "07-03-2024", type: "ניקיון" },
  { name: "משימה 6", date: "08-03-2024", type: "בישול" },
  { name: "משימה 7", date: "09-03-2024", type: "גינון" },
  { name: "משימה 8", date: "10-03-2024", type: "מחקר" },
];

export default function TaskPageComponent() {
  return (
    <TableContainer component={Paper} sx={{ width: 700, m: 2 }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TaskHeadComponent />
        {tasks.map((tasks) => (
          <TaskComponent task={tasks} />
        ))}
      </Table>
    </TableContainer>
  );
}
