import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GlobalServicesBottomListAvailable, GlobalServicesBottomListNotAvailable, mainPageBottomWidth } from '../../constants/data';
import Chip from '@mui/material/Chip';
import { Tooltip } from '@mui/material';

const TopHeadStyle = {
  fontWeight: '600',
  color: '#464646',
  fontSize: '22px',
  padding: '20px 10px',
  marginTop: '30px'

}
export default function BottomServices() {
  return (
    <Box id='houseDeck-Services' style={mainPageBottomWidth} >
      <Typography sx={TopHeadStyle}>HouseDeck Services</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>

        <Box sx={{ marginTop: '10px' }}>
          {
            GlobalServicesBottomListAvailable.map(data =>
              <Chip label={data.name} key={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px', cursor: 'pointer' }} component="a" href={data.url} clickable />
            )
          }
          {
            GlobalServicesBottomListNotAvailable.map(data =>
              <Tooltip title="Coming Soon" key={data.name} placement="top" arrow>
                {/* we do not need to remove href of do pointer-events:'none' cursor:'no-drop' property do both of them */}
                <Chip label={data.name} key={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px', cursor: 'no-drop' }} component="a" href={data.url} clickable />
              </Tooltip>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}
