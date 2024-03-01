import React from "react";
import TaskHeadComponent from "./TaskHeadComponent";
import { Paper, Table, TableContainer } from "@mui/material";
import TaskComponent from "./TaskComponent";

export default function TaskPageComponent({tasks}) {
    let taskName = tasks.map((tasks=>{return tasks.name}));
    let taskType = tasks.map((tasks=>{return tasks.type}));
    let taskDate = tasks.map((tasks=>{return tasks.date}));
    
  return (
        <TableContainer component={Paper} sx={{width:700, m: 2}}>
      <Table sx={{ minWidth: 400}} aria-label="simple table">
        <TaskHeadComponent/>
        <TaskComponent name={taskName} date={taskDate} type={taskType}/>
      </Table>
    </TableContainer>
  );
}
