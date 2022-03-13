import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'


function StepWritten({padding,display}) {
    return (
        <Box sx={{ padding: padding }}>
            <Typography sx={{ color: '#fb7f7f', fontFamily: 'Dancing script', fontSize: '33px', fontWeight: '900', textAlign: 'center' }}>About Us</Typography>
            <Typography sx={{ color: '#1b685f', fontSize: '53px', fontWeight: '600', textAlign: 'center' }}>Who We Are</Typography>
            <Typography sx={{ textAlign: 'center', padding: "20px 40px", color: '#95b2af' }}>
                HouseDeck provides a full deep house cleaning service. Each of our specialised
                professionally trained cleaners is on staff to provide all of your house cleaning needs. Our
                home cleaning services are reliable and trustworthy. HouseDeck backs up their claims with a
                100% customer satisfaction guarantee. We partner with top-rated professionals to take care
                of cleaning tasks. We are the best and most trusted choice for your home services needs.
                Our professional and responsive staff will work with you until everything is done to your
                satisfaction.
                For those looking for a stress-free way to keep their house clean and tidy, HouseDeck is the
                solution. our trusted professionals will arrive and conduct a service tailored to your home.
            </Typography>
            <Box sx={{ display: display, justifyContent: 'space-evenly', alignItems: 'self-start', mt:3}}>
                <Box sx={{ textAlign: 'center', padding:'0px 20px',mt:3 }}>
                    <Typography sx={{ textAlign: 'center', margin: '0px auto', fontSize: '20px', fontWeight: '600', fontFamily: 'Fredoka', color: 'black', background: '#fb7f7f', padding: '10px', borderRadius: '50%', width: 'fit-content', lineHeight: 'unset' }}>01</Typography>
                    <Typography sx={{ textAilgn: 'center', fontWeight: '900', mt: 2, fontFamily: 'Fredoka', fontSize: '18px' }}>Leading Cleaning Company </Typography>
                    <Typography sx={{ textAilgn: 'center', fontFamily: 'Fredoka', mt: 2 }}>With over 5 years experience and over 250+ regular customers, we guarantee best cleaning
                        services 100%. </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', padding:'0px 20px',mt:3 }}>
                    <Typography sx={{ textAlign: 'center', margin: '0px auto', fontSize: '20px', fontWeight: '600', fontFamily: 'Fredoka', color: 'black', background: '#fb7f7f', padding: '10px', borderRadius: '50%', width: 'fit-content', lineHeight: 'unset' }}>02</Typography>
                    <Typography sx={{ textAilgn: 'center', fontWeight: '900', mt: 2, fontFamily: 'Fredoka', fontSize: '18px' }}>Highly-Trained Cleaning experts </Typography>
                    <Typography sx={{ textAilgn: 'center', fontFamily: 'Fredoka', mt: 2 }}>Our highly-trained cleaning experts arrive at your home prepared with everything they need to
                        deep clean your space  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', padding:'0px 20px',mt:3 }}>
                    <Typography sx={{ textAlign: 'center', margin: '0px auto', fontSize: '20px', fontWeight: '600', fontFamily: 'Fredoka', color: 'black', background: '#fb7f7f', padding: '10px', borderRadius: '50%', width: 'fit-content', lineHeight: 'unset' }}>03</Typography>
                    <Typography sx={{ textAilgn: 'center', fontWeight: '900', mt: 2, fontFamily: 'Fredoka', fontSize: '18px' }}>Quality Commitment </Typography>
                    <Typography sx={{ textAilgn: 'center', fontFamily: 'Fredoka', mt: 2 }}>We use the latest technique and most powerful equipment to ensure the best job for your Home.</Typography>
                </Box>

                <Box sx={{ textAlign: 'center', padding:'0px 20px',mt:3 }}>
                    <Typography sx={{ textAlign: 'center', margin: '0px auto', fontSize: '20px', fontWeight: '600', fontFamily: 'Fredoka', color: 'black', background: '#fb7f7f', padding: '10px', borderRadius: '50%', width: 'fit-content', lineHeight: 'unset' }}>04</Typography>
                    <Typography sx={{ textAilgn: 'center', fontWeight: '900', mt: 2, fontFamily: 'Fredoka', fontSize: '18px' }}>24/7 Responsive Service  </Typography>
                    <Typography sx={{ textAilgn: 'center', fontFamily: 'Fredoka', mt: 2 }}>We work seven days a week giving you more flexibility to choose the best day which is best
                        suited to your needs.  </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default function InfoTextAboutus() {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:700px)');
    const sm = useMediaQuery('(max-width:700px)');
    return (
        <div style={{ marginTop: '3rem' }}>


            {xlMax && xlMin && (
                <StepWritten padding={'60px 100px'} display={'flex'}  />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <StepWritten padding={'30px 20px'} display={'flex'}  />
            )}
            {sm && (<StepWritten padding={'0px 20px'} display={'block'}  />)}
        </div>
    )

}
