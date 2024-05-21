import React from 'react'
import { useMediaQuery, Box, Typography } from '@mui/material'
export default function AboutEnd() {
  const xlMax = useMediaQuery('(max-width: 2000px)')
  const xlMin = useMediaQuery('(min-width: 600px)')
  const sm = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {
        xlMax && xlMin && (
          <Content display={'flex'} width={'31%'} />
        )
        
      }
      {
        !(xlMax && xlMin) && sm && (
          <Content display={'block'} width={'unset'} />
        )
      }
    </>
  )
}


function Content({ display,width }) {
  return (
    <Box sx={{mt:4}} >
      <Typography sx={{ textAlign: 'center', fontFamily: 'Dancing Script', color: '#fb7f7f', mt: 4 }} variant="h3">What we use</Typography>
      <Box sx={{
        display: display,
        justifyContent: 'space-between',
        alignItems: 'baseline',
        textAlign: 'center',
        width: "95%",
        m: '20px auto',
      }}>
        <Box sx={{
          my: 3, width: width,transition:".3s", '&:hover': {
            color: '#fb7f7f',
            transform: 'scale(1.1)'
          }
        }}>
          <Typography sx={{ fontFamily: 'Fredoka', }} variant="h5">Equipments</Typography>
          <Typography sx={{ fontFamily: 'Fredoka', mt: 2 }} variant="h6">Vapormop uses the latest cleaning equipment, technologies and procedures to clean your home.</Typography>
        </Box>
        <Box sx={{
          my: 3, width: width,transition:".3s", '&:hover': {
            color: '#fb7f7f',
            transform: 'scale(1.1)'
          }
        }}>
          <Typography sx={{ fontFamily: 'Fredoka', }} variant="h5">Stain Removers</Typography>
          <Typography sx={{ fontFamily: 'Fredoka', mt: 2 }} variant="h6">Stain removes for getting rid of pet stains, mould, rust and much more.</Typography>
        </Box>
        <Box sx={{
          my: 3, width: width,transition:".3s", '&:hover': {
            color: '#fb7f7f',
            transform: 'scale(1.1)'
          }
        }}>
          <Typography sx={{ fontFamily: 'Fredoka', }} variant="h5">Odour Eliminator</Typography>
          <Typography sx={{ fontFamily: 'Fredoka', mt: 2 }} variant="h6">We finish it up with odour eliminator to keep your home fresh.</Typography>
        </Box>
      </Box>
    </Box>
  )
}
