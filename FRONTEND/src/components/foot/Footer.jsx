import React from 'react'
import { FooterLink, SocialMediadata } from '../../constants/data'
import { useMediaQuery,Box,Link } from '@mui/material';


function FooterContent({fontSize,margin}) {
    return (
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px', }}>
                {FooterLink.map(data =>
                    <Link key={data.url} href={data.url} sx={{ fontSize: fontSize, color: '#464646', margin: margin,textDecoration:'none' }}>{data.name}</Link>
                )}
            </Box>
            <hr style={{ margin: '35px 8%', color: '#ddd', borderTopWidth: '1px' }} />

            {/* Sir told me to hide this*/}
            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 'auto' }}>
                {['../otherPlatformLink/android.svg', '../otherPlatformLink/ios.svg'].map(data =>
                    <img style={{ margin: '20px 10px' }} src={data} alt="none" />
                )}
            </Box> */}

            <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 'auto' }}>
                {SocialMediadata.map(data=>
                <a key={data.link} href={data.link} target="_blank" rel="noreferrer">
                    <img style={{ margin: '20px 20px' ,width:'20px',background: "#e5f6f5",borderRadius:'100%',padding:'7px'}} src={data.url} alt="none" />
                </a>
                 
                    )}
            </Box>
            <Box sx={{textAlign:'center',fontSize:fontSize,marginBottom:'20px',color: '#464646'}}>
            HouseDeck Furnishing Pvt. Ltd.  &copy;   2021-22
            </Box>

        </div>
    )
}


export default function Footer(){

  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1160px)');
  const mdMax = useMediaQuery('(max-width:1160px)');
  const mdMin = useMediaQuery('(min-width:700px)');
  const sm = useMediaQuery('(max-width:700px)');

  return (

    <>
    {xlMax && xlMin && (
        <FooterContent fontSize={'18px'} margin={'0px 20px'}  />
    )}
    {!(xlMax && xlMin) && mdMax && mdMin && (
        <FooterContent fontSize={'16px'} margin={"0px 5px 5px"}  />
    )}
    {sm && (<FooterContent fontSize={'14px'} margin={"0px 5px 5px"}  />)}
</>
  )
}
