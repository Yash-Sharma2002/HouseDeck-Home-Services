import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Box, Typography, Breadcrumbs, Link, Divider, Button, useMediaQuery } from '@mui/material'

export default function AboutMid() {
    return (
        <div style={{ marginTop: '40px' }}>
            <Box sx={{ zIndex: 1000, position: 'absolute', wordWrap: 'break-word', right: '7pc', width: "55%", mt: 10 }}>
                <Typography sx={{ color: 'white', fontFamily: 'Dancing script', fontSize: '80px', fontWeight: '900', textAlign: 'center' }}>HouseDeck</Typography>
                <Typography sx={{ color: 'white', fontSize: '80px', fontWeight: '900', textAlign: 'right' }}>Is Your Expert For Home services!  </Typography>
                <Typography sx={{ color: 'white', fontSize: '16px', textAlign: 'right', width: '60%', marginLeft: 'auto', marginRight: '0px' }}>We guarantee satisfaction. Just call us within 7 days of service and we’ll return to your home to remedy the problem.</Typography>
                <Link href="tel:18003096606" target="_blank" sx={{
                    textDecoration: 'none',textAlign:"right"
                }}>
                    <Box sx={{
                        height: '80px',
                        background: '#fb7f7f',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '3rem',
                        padding: '0.4em 3.1em 0.35em 0.45em',
                        marginLeft:'auto',
                        width: '240px',
                        mt:10
                    }}>
                        <AddIcCallIcon sx={{
                            width: "30px", p: 3, background: 'white', color: '#fb7f7f', borderRadius: '50%',
                        }} />
                        <Typography sx={{
                            color: 'white', fontSize: '20px', textAlign: 'right',fontFamily:'Fredoka',
                        }}>18003096606</Typography>
                    </Box></Link>
            </Box>
            <div style={{
                background: `url(${require('../../assets/other/about_main_image.jpeg')})`,
                backgroundSize: 'cover',
                height: '900px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.6)',
                marginTop: '-40px'
            }}></div>

        </div>
    )
}
