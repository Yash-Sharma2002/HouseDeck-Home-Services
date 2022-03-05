import React from 'react'
import { Box, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';

function Content({ padding, display, width }) {
    return (
        <div id='houseDeck-promise' style={{
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
                    HouseDeck Promise for Painting services in City

                </Typography>
                <Box sx={{ display: display, justifyContent: 'space-between',  textAlign: 'center', margin: '10px auto' }}>
                    <Box sx={{ width: width, textAlign: 'center', wordWrap: 'break-word', margin: '10px auto' }}>
                    <img src="../other/orange icons 15-01.png" style={{width:"75px"}} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Lowest Prices
                        </Typography>
                        <Typography sx={{ fontSize: '14px' }}>No surprises at the time of service, no hidden costs
                        </Typography>
                    </Box>
                    <Box sx={{ width: width, textAlign: 'center', wordWrap: 'break-word', margin: '10px auto' }}>
                    <img src="../other/orange 9-01.png" style={{width:"75px"}} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Free Cancellation & Reschedule</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Book now, cancel or change anytime later. No questions asked.</Typography>
                    </Box>
                    <Box sx={{ width: width, textAlign: 'center', wordWrap: 'break-word', margin: '10px auto' }}>
                    <img src="../other/orange icons 10-01.png" style={{width:"75px"}} alt="Select 1" />
                        <Typography sx={{
                            fontWeight: '600',
                            color: '#464646',
                            fontSize: '16px',
                        }}>Book now, cancel or change anytime later. No questions asked.</Typography>
                        <Typography sx={{ fontSize: '14px' }}>No local vendors, only verified and best-in-class service professionals are chosen after stringent quality checks</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default function HouseDeckPromise() {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1200px)');
    const mdMax = useMediaQuery('(max-width:1200px)');
    const mdMin = useMediaQuery('(min-width:800px)');
    const sm = useMediaQuery('(max-width:800px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content padding={'60px 100px'} display={'flex'} width={'33%'} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content padding={'20px 30px'} display={'flex'} width={'31%'} />
            )}
            {sm && (<Content padding={'20px'} display={'block'} width={'unset'} />)}
        </>
    )

}
