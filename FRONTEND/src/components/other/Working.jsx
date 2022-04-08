import React from 'react'
import { Box, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';

function Content({ padding,display,width,service}) {
    return (
        <div id='how-it-works' style={{
            padding: padding
        }}>
            <Box>
                <Typography sx={{
                    fontWeight: '600',
                    color: '#464646',
                    fontSize: '22px',
                    paddingBottom: '50px',
                    marginTop: '20px'
                }}>
                    How it works
                </Typography>
                <Box sx={{ display: display, justifyContent: 'space-between',textAlign:'center',margin:'10px auto' }}>
                    <Box sx={{width:width,textAlign:'center',wordWrap:'break-word',margin:'10px auto'}}>
                        <img src={require("../../assets/other/orange icons 11-01.png")} style={{width:"75px"}} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Select The Service You Need</Typography>
                        <Typography sx={{fontSize:'14px'}}>Get lowest priced quotes for your {service.toLowerCase()} service</Typography>
                    </Box>
                    <Box sx={{width:width,textAlign:'center',wordWrap:'break-word',margin:'10px auto'}}>
                    <img src={require("../../assets/other/orange icons 12-01.png")} style={{width:"75px"}} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Lowest Priced Instant Quote</Typography>
                        <Typography sx={{fontSize:'14px'}}>Get guarateed lowest price for your service</Typography>
                    </Box>
                    <Box sx={{width:width,textAlign:'center',wordWrap:'break-word',margin:'10px auto'}}>
                    <img src={require("../../assets/other/orange icons 13-01.png")} style={{width:"75px"}} alt="Select 1" />

                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Hassle-Free Service</Typography>
                        <Typography sx={{fontSize:'14px'}}>Our Partner arrives at your doorstep</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default function Working({service}) {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1200px)');
    const mdMax = useMediaQuery('(max-width:1200px)');
    const mdMin = useMediaQuery('(min-width:800px)');
    const sm = useMediaQuery('(max-width:800px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content padding={'60px 100px'} display={'flex'} width={'33%'} service={service}  />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content padding={'20px 30px'} display={'flex'} width={'31%'} service={service}  />
            )}
            {sm && (<Content padding={'20px'} display={'block'} width={'unset'} service={service}  />)}
        </>
    )

}
