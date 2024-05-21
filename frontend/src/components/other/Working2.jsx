import React from 'react'
import { Box,Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';

function Content({ padding, display, width, service, city }) {
    return (
        <div id='how-it-works' style={{
            padding: padding
        }}>
            <Box>
                <Typography sx={{
                    fontWeight: '600',
                    color: '#F45C43',
                    fontSize: '22px',
                    paddingBottom: '50px',
                    marginTop: '20px'
                }}>
                    How it works
                </Typography>
                <Box sx={{ display: display, justifyContent: 'space-between', textAlign: 'center', margin: '10px auto' }}>
                    <Box sx={{ width: width, textAlign: 'center', wordWrap: 'break-word', margin: '7px auto' }}>
                        <img src={require("../../assets/other/orange icons 11-01.png")} style={{ width: "75px" }} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Book your Service</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Tell us preferred time to book</Typography>
                    </Box>
                    <Box sx={{ width: width, textAlign: 'center', wordWrap: 'break-word', margin: '7px auto' }}>
                        <img src={require("../../assets/other/orange icons 12-01.png")} style={{ width: "75px" }} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Lowest Priced Instant Quote</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Get guarateed lowest price for your service</Typography>
                    </Box>
                    <Box sx={{ width: width, textAlign: 'center', wordWrap: 'break-word', margin: '7px auto' }}>
                        <img src={require("../../assets/other/orange icons 13-01.png")} style={{ width: "75px" }} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Hassle-Free Service</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Our Partner arrives at your doorstep</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default function Working2({ service, city }) {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1200px)');
    const mdMax = useMediaQuery('(max-width:1200px)');
    const mdMin = useMediaQuery('(min-width:800px)');
    const sm = useMediaQuery('(max-width:800px)');
    return (
        <>
            {xlMax && xlMin && (
                <Content padding={'60px 100px'} display={'flex'} width={'33%'} service={service} city={city} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content padding={'20px'} display={'flex'} width={'31%'} service={service} city={city} />
            )}
            {sm && (<Content padding={'20px'} display={'block'} width={'unset'} service={service} city={city} />)}
        </>
    )

}
