import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CitiesImg, mainPageBottomWidth,SearchBar } from '../../constants/data';
import Chip from '@mui/material/Chip';
import { LoginContext } from '../../context/Context';

const TopHeadStyle = {
    fontWeight: '600',
    color: '#464646',
    fontSize: '22px',
    marginTop:'30px'
}

export default function Similar2({service }) {
    const {city} = React.useContext(LoginContext)
  const currentCity = city.replace(/ /g, '_').toLowerCase()
  return (
        <div id='similar-services-for-other-pages' style={{
            background: 'hsla(0,0%,92.9%,.4)',
            padding: '30px 0px',
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

                <Typography sx={{
                    color: '#464646',
                    fontSize: '16px',
                    padding: '10px 10px',
                }}>In Other Cities</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>

                    <Box sx={{ marginTop: '10px', }}>
                        {
                            CitiesImg.map(data => {
                                const dataAll = `${service} Services in ${data.name}`
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
