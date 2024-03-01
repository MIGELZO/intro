import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function TaskHeadComponent() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <strong>Mission Page:</strong>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <strong>Task name</strong>
        </TableCell>
        <TableCell>
          <strong>Type</strong>
        </TableCell>
        <TableCell>
          <strong>Submission Date</strong>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
