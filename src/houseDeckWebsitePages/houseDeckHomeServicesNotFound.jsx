import React from 'react'
import { Box, Typography, Link } from '@mui/material'

export default function HouseDeckHomeServicesNotFound() {
  return (
    <div>
        <Box sx={{ width: 'fit-content', margin: '20px auto', mt:5,fontFamily: 'Fredoka', fontSize: '40px', borderRight: '2px solid red', borderLeft: '2px solid red', p: '0px 10px' }}>
          ERROR - 404 
        </Box>
        <Box sx={{textAlign:'center'}}>
          <img src="../logos/404.webp" alt="Not Found" />
        </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'center',  lineHeight: 0, }}>
          <Typography sx={{ fontSize: '30px', fontWeight: '900', fontFamily: 'Fredoka' }}>Lost Your Way</Typography>
          <Typography sx={{ fontSize: '20px', mt: 3, fontFamily: 'Fredoka', fontWeight: '100!important' }}>Sorry we can't find that page.<br />
            You'll find loads to explore on the home page.</Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center' }}>

        <Link href='/home-services' sx={{
          fontSize: '20px',
          fontWeight: '900',
          fontFamily:'Fredoka',
          textDecoration: 'none',
          padding: '15px',
          border: '2px solid red',
          color: 'black',
          marginTop: '30px',
          display: 'inline-block',
          transition: 'all .2s',
          borderRadius:2,
          '&:hover': {
            background:'red',
            color:'white',
            transform: 'scale(1.1)',
            boxShadow: '2.1px 2.1px 15px 1px #5f4B8bff!important',
          }
        }}>Main Page</Link>

      </Box>

    </div>
  )
}
