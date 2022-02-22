import React from 'react'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function PropertyBoxMainPageHouseDeckServicesGlobal() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgb(194 194 194 / 50%)',
            padding: '30px',
            borderTop: '1px solid rgba(70,70,70,.239216)',
            borderBottom: '1px solid rgba(70,70,70,.239216)',

        }}>
            <Box sx={{ width: '50%', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Find Property</Typography>
                <Typography  sx={{fontSize:'14px'}}>Select from thousands of options, without brokerage.</Typography>
                <a href='#'
                 style={{
                     padding:'3px 20px',
                     backgroundColor:'#464646',
                     marginTop:'15px',
                     borderRadius:'4px',
                     textDecoration:'none',
                     color:'#fff',
                     fontWeight:'600',
                     display:'inline-block'
                 }}>Find Now</a>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ width: '50%', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>List your Property</Typography>
                <Typography sx={{fontSize:'14px'}}>  For Free. Without any brokerage.</Typography>
                <a href='#'
                 style={{
                     padding:'3px 20px',
                     backgroundColor:'#464646',
                     marginTop:'15px',
                     borderRadius:'4px',
                     textDecoration:'none',
                     color:'#fff',
                     fontWeight:'600',
                     display:'inline-block'
                 }}>Free Posting</a>
            </Box>
        </div>
    )
}
