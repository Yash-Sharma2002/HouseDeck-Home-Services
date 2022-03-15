import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RecommendedServicesData } from '../../constants/data';
import { useMediaQuery } from '@mui/material';


const TopHeadQuestions = {
    fontWeight: '600',
    color: '#464646',
    fontSize: '22px',
    paddingBottom: '50px',
}


const Content = () => {
    return (
        <Box sx={{
            borderBottom: '1px solid #e2e2e2',
            paddingBottom: '80px'
        }}>
            <Typography variant='h4' style={TopHeadQuestions}>Recommended Services</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {RecommendedServicesData.map(data =>
                    <Box key={data.title} sx={{ width: '30%', cursor: 'pointer', padding: '10px 0px' }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${data.url})`,
                                minWidth: '200px',
                                height: '100px',
                                backgroundSize: 'cover',
                                borderRadius: '4px'
                            }}>
                        </Box>
                        <Box sx={{ marginTop: '15px' }}>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#464646'
                            }}>{data.title}</Typography>
                            <Typography variant="body2" sx={{ margin: '0px 0px 10px', fontSize: '14px' }} color="#787676">
                                {data.subText}
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontWeight: '600'
                            }} color="#fd3752">
                                {data.colorText}
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>

        </Box>
    )
}
function XLRecommendedServices() {
    return (
        <div id="houseDeck-Recommended-Services"  style={{
            padding: '60px 100px',
        }}>
            <div style={{marginTop:'40px'}}><Content /></div>
            
        </div>
    )
}
function MDRecommendedServices() {
    return (
        <div id="houseDeck-Recommended-Services"  style={{
            padding: '20px',
        }}>
           
           <div style={{marginTop:'40px'}}><Content /></div>
        </div>
    )
}


function SMRecommendedServices() {
    return (
        <div id="houseDeck-Recommended-Services"  style={{
            padding: '20px',
        }}>
            
            <div style={{marginTop:'40px'}}>
            {RecommendedServicesData.map(data =>
                <Box sx={{ display: 'flex',justifyContent:'space-between',marginTop:'20px',borderBottom: '1px solid #e0e0e0', }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#464646'
                        }}>{data.title}</Typography>
                        <Typography variant="body2" sx={{ margin: '0px 0px 10px', fontSize: '14px' }} color="#787676">{data.subText}</Typography>
                        <Typography variant="body2" sx={{
                                fontWeight: '600'
                            }} color="#fd3752">
                                {data.colorText}</Typography>
                    </Box>
                    <Box sx={{
                        backgroundImage: `url(${data.url})`,
                        minWidth: '80px',
                        height: '80px', backgroundPosition: '45%',
                        backgroundSize: 'cover',
                    }}>
                    </Box>
                </Box>

            )}</div>
        </div>
    )
}


export default function RecommendedServices(){
    
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1160px)');
  const mdMax = useMediaQuery('(max-width:1160px)');
  const mdMin = useMediaQuery('(min-width:800px)');
  const sm = useMediaQuery('(max-width:800px)');
  return (
      
    <>
    {xlMax && xlMin && (
        <XLRecommendedServices />
    )}
    {!(xlMax && xlMin) && mdMax && mdMin && (
        <MDRecommendedServices />
    )}
    {sm && (<SMRecommendedServices />)}
</>
  )
}