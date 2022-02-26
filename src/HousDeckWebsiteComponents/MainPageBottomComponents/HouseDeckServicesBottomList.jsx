import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GlobalServicesBottomList, mainPageBottomWidth } from '../../constants/data';
import Chip from '@mui/material/Chip';

const TopHeadStyle = {
  fontWeight: '600',
  color: '#464646',
  fontSize: '22px',
  padding: '20px 10px',
  marginTop:'30px'

}

export default function HouseDeckServicesBottomList() {
  return (
    <Box id='houseDeck-Services' style={mainPageBottomWidth} >
      <Typography sx={TopHeadStyle}>HouseDeck Services</Typography>
      <Box sx={{ display:'flex', flexWrap: 'wrap', justifyContent: 'start' }}>

          <Box sx={{ marginTop: '10px'}}>
            {
              GlobalServicesBottomList.map(data =>
                <Chip label={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px' }} component="a" href="#" clickable />
              )
            }
        </Box>
      </Box>
    </Box>
  )
}
