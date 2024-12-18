import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { mainPageBottomWidth, SearchBar } from '../../constants/data';
import Chip from '@mui/material/Chip';
import { LoginContext } from '../../context/Context';

const TopHeadStyle = {
  fontWeight: '600',
  color: '#F45C43',
  fontSize: '22px',
  padding: '10px 10px',
}
export default function Similar() {
  const { city } = React.useContext(LoginContext)
  const currentCity = city.replace(/ /g, '_').toLowerCase()
  return (
    <div style={{
      background: 'hsla(0,0%,92.9%,.4)',
      padding: '30px 0px'
    }}>
      <Box style={mainPageBottomWidth} >
        <Typography sx={TopHeadStyle}>Similar Services</Typography>
        <Typography sx={{
          color: '#464646',
          fontSize: '16px',
          padding: '10px 10px',
        }}>In {city}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>

          <Box sx={{ marginTop: '10px', }}>
            {
              SearchBar[currentCity].map(data => {
                const dataAll = `${data.value} in ${city}`
                return (
                  <Chip label={dataAll} key={dataAll} sx={{ m: 1, backgroundColor: '#e8e8e8', borderRadius: '7px', height: '23px' }} component="a" href={data.url} clickable />
                )
              })
            }
          </Box>
        </Box>
      </Box>
    </div>
  )
}
