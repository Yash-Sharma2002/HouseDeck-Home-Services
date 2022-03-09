import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GlobalServicesBottomListAvailable, GlobalServicesBottomListNotAvailable, mainPageBottomWidth } from '../../constants/data';
import Chip from '@mui/material/Chip';
import { Tooltip } from '@mui/material';

// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { styled } from '@mui/material/styles';

const TopHeadStyle = {
  fontWeight: '600',
  color: '#464646',
  fontSize: '22px',
  padding: '20px 10px',
  marginTop: '30px'

}
// const LightTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     // backgroundColor: theme.palette.common.white,
//     color: 'black',
//     boxShadow:'none',
//     fontSize: 14,
//   },
// }));

export default function HouseDeckServicesBottomList() {
  return (
    <Box id='houseDeck-Services' style={mainPageBottomWidth} >
      <Typography sx={TopHeadStyle}>HouseDeck Services</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>

        <Box sx={{ marginTop: '10px' }}>
          {
            GlobalServicesBottomListAvailable.map(data =>
              <Chip label={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px', cursor: 'pointer' }} component="a" href={data.url} clickable />
            )
          }
          {
            GlobalServicesBottomListNotAvailable.map(data =>
              <Tooltip title="Coming Soon" placement="top" arrow>
                {/* we do not need to remove href of do pointer-events:'none' cursor:'no-drop' property do both of them */}
                <Chip label={data.name} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px', cursor: 'no-drop' }} component="a" href={data.url} clickable />
              </Tooltip>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}
