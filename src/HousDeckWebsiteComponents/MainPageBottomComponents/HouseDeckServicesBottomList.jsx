import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GlobalServicesBottomBuy, GlobalServicesBottomRent, mainPageBottomWidth } from '../../constants/data';
// import { makeStyles } from '@mui/styles';
import Chip from '@mui/material/Chip';

const TopHeadStyle = {
  fontWeight: '600',
  color: '#464646',
  fontSize: '22px',
  padding: '20px 10px'

}

// const useStyle = makeStyles({
//   ServicesBottomBox: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '95%',
//     margin: '0px auto'
//   },
// })

export default function HouseDeckServicesBottomList() {
  // const classes = useStyle();
  return (
    <div id='houseDeck-Services' style={mainPageBottomWidth} >
      <Typography sx={TopHeadStyle}>HouseDeck Services</Typography>
      <Box sx={{ display: { xs: 'block', sm: 'flex' },flexWrap:'wrap',justifyContent:'center' }}>
        <Box sx={{ width: '46%' }}>
          <Typography sx={{ fontSize: '16px' }}>Buy</Typography>
          <Box sx={{ marginTop: '10px', ml: -1 }}>
            {
              GlobalServicesBottomBuy.map(data =>
                <Chip label={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px' }} component="a" href="#" clickable />
              )
            }
          </Box>
        </Box>
        <Box sx={{ width: '46%' }}>
          <Typography sx={{ fontSize: '16px' }}>Rent</Typography>
          <Box sx={{ marginTop: '10px', ml: -1 }}>
            {
              GlobalServicesBottomRent.map(data =>
                <Chip label={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px' }} component="a" href="#" clickable />
              )
            }
          </Box>
        </Box>
      </Box>
    </div>
  )
}
