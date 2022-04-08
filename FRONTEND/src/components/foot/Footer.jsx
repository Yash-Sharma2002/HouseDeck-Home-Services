import React from 'react'
import { FooterLink} from '../../constants/data'
import { useMediaQuery,Box,Link } from '@mui/material';
import Facebook from '../../assets/socialmedia/facebook.svg'
import Instagram from '../../assets/socialmedia/instagram.svg'
import LinkedIn from '../../assets/socialmedia/linkedin.svg'
import Twitter from '../../assets/socialmedia/twitter.svg'
import YouTube from '../../assets/socialmedia/youtube.svg'

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
                {['../../assets/otherPlatformLink/android.svg', '../../assets/otherPlatformLink/ios.svg'].map(data =>
                    <img style={{ margin: '20px 10px' }} src={data} alt="none" />
                )}
            </Box> */}

            <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 'auto' }}>
                <a href= "https://www.facebook.com/HouseDeck-105233744909399" target="_blank" rel="noreferrer">
                    <img style={{ margin: '20px 20px' ,width:'20px',background: "#e5f6f5",borderRadius:'100%',padding:'7px'}} src={Facebook} alt="none" />
                </a>
                <a href="https://twitter.com/HouseDeck_India" target="_blank" rel="noreferrer">
                    <img style={{ margin: '20px 20px' ,width:'20px',background: "#e5f6f5",borderRadius:'100%',padding:'7px'}} src={Twitter} alt="none" />
                </a>
                 <a href="https://www.instagram.com/housedeck_india/" target="_blank" rel="noreferrer">
                    <img style={{ margin: '20px 20px' ,width:'20px',background: "#e5f6f5",borderRadius:'100%',padding:'7px'}} src={Instagram} alt="none" />
                </a>
                <a href="https://www.linkedin.com/company/housedeck/?viewAsMember=true" target="_blank" rel="noreferrer">
                    <img style={{ margin: '20px 20px' ,width:'20px',background: "#e5f6f5",borderRadius:'100%',padding:'7px'}} src={LinkedIn} alt="none" />
                </a>
                <a href="https://www.youtube.com/channel/UCynivV8Qp5QeuSJcr81z9zA" target="_blank" rel="noreferrer">
                    <img style={{ margin: '20px 20px' ,width:'20px',background: "#e5f6f5",borderRadius:'100%',padding:'7px'}} src={YouTube} alt="none" />
                </a>
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
