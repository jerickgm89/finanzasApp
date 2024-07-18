import { Button, Typography } from '@mui/material'
import React from 'react'

export const App = () => (
  <>
    <Typography 
      sx={{
        fontSize: 100,
        textAlign: 'center',
      }}
    >
      text
    </Typography>
    <Typography 
      fontSize={50}
      align='center'
    >
      text2
    </Typography>
    <Button variant="contained" 
      sx={{
        backgroundColor: "#1e1e2e",
        '&:hover': {
      backgroundColor: "#3e3e5e", // Cambia este color por el que desees para el hover
    },
      }} >
        Contained
    </Button>
  </>

)
