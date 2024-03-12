import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'


export default function MyList() {
    const [numOneArr,setNumOneArr] = useState([1,1,1])

    const addOne = () => {
        setNumOneArr([...numOneArr,1])
    }
  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
        <Button variant='contained' onClick={()=> addOne()}>+</Button>
        <Typography>{numOneArr}</Typography>
    </Box>
  )
}
