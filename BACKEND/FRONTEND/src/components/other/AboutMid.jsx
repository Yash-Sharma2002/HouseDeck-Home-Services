import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Box, Typography, Link, useMediaQuery } from '@mui/material'

function AboutMidLarge() {
    return (
        <div style={{ marginTop: '40px' }}>
            <Box sx={{ zIndex: 1000, position: 'absolute', wordWrap: 'break-word', right: '7pc', width: "55%", mt: 10 }}>
                <Typography sx={{ color: 'white', fontFamily: 'Dancing script', fontSize: '80px', fontWeight: '900', textAlign: 'center' }}>HouseDeck</Typography>
                <Typography sx={{ color: 'white', fontSize: '80px', fontWeight: '900', textAlign: 'right' }}>Is Your Expert For Home services!  </Typography>
                <Typography sx={{ color: 'white', fontSize: '16px', textAlign: 'right', width: '60%', marginLeft: 'auto', marginRight: '0px' }}>We guarantee satisfaction. Just call us within 7 days of service and we’ll return to your home to remedy the problem.</Typography>
                <Link href="tel:18003096606" target="_blank" sx={{
                    textDecoration: 'none', textAlign: "right"
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
                        marginLeft: 'auto',
                        width: '240px',
                        mt: 10
                    }}>
                        <AddIcCallIcon sx={{
                            width: "30px", p: 3, background: 'white', color: '#fb7f7f', borderRadius: '50%',
                        }} />
                        <Typography sx={{
                            color: 'white', fontSize: '20px', textAlign: 'right', fontFamily: 'Fredoka',
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



function AboutMidMedium({top}) {
    return (
        <div style={{ marginTop: '60px' }}>
            <Box sx={{ zIndex: 1000, position: 'absolute', wordWrap: 'break-word', left:'50%',transform:`translate(-50%,${top})`,textAlign:'center'}}>
                <Typography sx={{ color: 'white', fontFamily: 'Dancing script', fontSize: '30px', fontWeight: '900', }}>HouseDeck</Typography>
                <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '700' }}>Is Your Expert For Home services!  </Typography>
                <Typography sx={{ color: 'white', fontSize: '16px', width: '60%', m: '0px auto', mt: 2 }}>We guarantee satisfaction. Just call us within 7 days of service and we’ll return to your home to remedy the problem.</Typography>
                <Link href="tel:18003096606" target="_blank" sx={{
                    textDecoration: 'none', textAlign: "right"
                }}>
                    <Box sx={{
                        background: '#fb7f7f',
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 'fit-content',
                        m: "0px auto",
                        p: 2,
                        mt: 4
                    }}>
                        <AddIcCallIcon sx={{
                            p: 1, mr: 1, background: 'white', color: '#fb7f7f', borderRadius: '50%',
                        }} />
                        <Typography sx={{
                            color: 'white', fontSize: '20px', fontFamily: 'Fredoka',
                        }}>18003096606</Typography>
                    </Box></Link>
            </Box>
            <div style={{
                background: `url(${require('../../assets/other/about_main_image.jpeg')})`,
                backgroundSize: 'cover',
                height: '500px',
                objectFit: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.6)',
                marginTop: '-40px'
            }}></div>

        </div>
    )
}


export default function AboutMid() {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1300px)');
    const MdMax = useMediaQuery('(max-width:1300px)');
    const MdMin = useMediaQuery('(min-width:500px)');
    const sm = useMediaQuery('(max-width:500px)');
    return (

        <>
            {xlMax && xlMin && (
                <AboutMidLarge />
            )}
            {!(xlMax && xlMin) && MdMin && MdMax &&(
                <AboutMidMedium top={'40%'} />
            )}
            {sm && (
                <AboutMidMedium top={'5%'}  />
            )}

        </>
    )
}