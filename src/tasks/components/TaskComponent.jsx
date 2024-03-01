import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function TaskComponent({name,date,type}) {
  
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          {name[0]}
        </TableCell>
        <TableCell>
          {type[0]}
        </TableCell>
        <TableCell>
          {date[0]}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          {name[1]}
        </TableCell>
        <TableCell>
          {type[1]}
        </TableCell>
        <TableCell>
          {date[1]}
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
