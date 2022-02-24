
import React from 'react'
import { FooterLink, SocialMediadata } from '../constants/data'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';



function FooterContent({fontSIze,margin}) {
    return (
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px', }}>
                {FooterLink.map(data =>
                    <Typography sx={{ fontSize: fontSIze, color: '#464646', margin: margin }}>{data.name}</Typography>
                )}
            </Box>
            <hr style={{ margin: '35px 8%', color: '#ddd', borderTopWidth: '1px' }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 'auto' }}>
                {['../otherPlatformLink/android.svg', '../otherPlatformLink/ios.svg'].map(data =>
                    <img style={{ margin: '20px 20px' }} src={data} alt="none" />
                )}
            </Box>

            <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 'auto' }}>
                {SocialMediadata.map(data=>
                
                    <img style={{ margin: '20px 20px' ,background:'#e8e8e8',borderRadius:'100%',padding:'7px 9px'}} src={data.url} alt="none" />
                 
                    )}
            </Box>
            <Box sx={{textAlign:'center',fontSize:fontSIze,marginBottom:'20px'}}>
            &copy; 2013-22 NoBroker Technologies Solution Pvt. Ltd.
            </Box>

        </div>
    )
}

function XLFooter ({fontSIze,margin})
{
    return <FooterContent fontSIze={fontSIze} margin={margin} />
}
function MDFooter ({fontSIze,margin})
{
    return <FooterContent fontSIze={fontSIze} margin={margin}  />
}
function SMFooter({fontSIze,margin})
{
    return <FooterContent fontSIze={fontSIze} margin={margin}  />
}

export default function Footer(fontSIze){

  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1160px)');
  const mdMax = useMediaQuery('(max-width:1160px)');
  const mdMin = useMediaQuery('(min-width:700px)');
  const sm = useMediaQuery('(max-width:700px)');

  return (

    <>
    {xlMax && xlMin && (
        <XLFooter fontSIze={'18px'} margin={'0px 20px'}  />
    )}
    {!(xlMax && xlMin) && mdMax && mdMin && (
        <MDFooter fontSIze={'16px'} margin={"0px 5px 5px"}  />
    )}
    {sm && (<SMFooter fontSIze={'14px'} margin={"0px 5px 5px"}  />)}
</>
  )
}