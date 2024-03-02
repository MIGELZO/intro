import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function TaskComponent({task}) {
  
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          {task[0]}
        </TableCell>
        <TableCell>
          {task[1]}
        </TableCell>
        <TableCell>
          {task[2]}
        </TableCell>
      </TableRow>

    </TableBody>
  )
}
