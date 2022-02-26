import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GlobalServicesBottomList, mainPageBottomWidth } from '../constants/data';
import Chip from '@mui/material/Chip';

const TopHeadStyle = {
  fontWeight: '600',
  color: '#464646',
  fontSize: '22px',
  padding: '10px 10px',
}
export default function SimilarServices() {
  return (
    <div style={{
      background: 'hsla(0,0%,92.9%,.4)',
      padding:'30px 0px'}}>
    <Box style={mainPageBottomWidth} >
    <Typography sx={TopHeadStyle}>Similar Services</Typography>
    <Box sx={{ display:'flex', flexWrap: 'wrap', justifyContent: 'start' }}>

        <Box sx={{ marginTop: '10px',}}>
          {
            GlobalServicesBottomList.map(data =>
              <Chip label={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px' }} component="a" href="#" clickable />
            )
          }
      </Box>
    </Box>
  </Box>
  </div>
  )
}
