import React from "react";
import TaskHeadComponent from "./TaskHeadComponent";
import { Paper, Table, TableContainer } from "@mui/material";
import TaskComponent from "./TaskComponent";

export default function TaskPageComponent({tasks}) {
  let taskName = tasks.map((tasks=>{return tasks.name}));
  let taskType = tasks.map((tasks=>{return tasks.type}));
  let taskDate = tasks.map((tasks=>{return tasks.date}));

  let task1 = [taskName[0], taskType[0], taskDate[0]]
  let task2 = [taskName[1], taskType[1], taskDate[1]]
  
  return (
        <TableContainer component={Paper} sx={{width:700, m: 2}}>
      <Table sx={{ minWidth: 400}} aria-label="simple table">
        <TaskHeadComponent/>
        <TaskComponent task={task1}/>
        <TaskComponent task={task2}/>
      </Table>
    </TableContainer>
  );
}