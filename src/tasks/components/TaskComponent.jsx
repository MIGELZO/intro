import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function TaskComponent({task}) {
  
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          {task.name}
        </TableCell>
        <TableCell>
          {task.date}
        </TableCell>
        <TableCell>
          {task.type}
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
