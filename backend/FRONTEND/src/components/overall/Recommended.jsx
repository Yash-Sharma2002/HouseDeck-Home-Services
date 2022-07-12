import * as React from 'react';
import { RecommendedServicesData  } from '../../constants/data';
import { useMediaQuery, Link, Typography, Box } from '@mui/material';


const TopHeadQuestions = {
    fontWeight: '600',
    color: '#F45C43',
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

                    <Link key={data.title} href={data.url} sx={{ textDecoration: 'none', width: '30%', cursor: 'pointer', padding: '10px 0px' }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${data.img})`,
                                minWidth: '200px',
                                height: '200px',
                                backgroundSize: 'cover',
                                borderRadius: '4px',
                                boxShadow:1
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
                                fontWeight: '600',
                                textDecoration: 'none'
                            }} color="#fd3752">
                                {data.colorText}
                            </Typography>
                        </Box>
                    </Link>
                )}
            </Box>

        </Box>
    )
}
function XLRecommended() {
    return (
        <div id="houseDeck-Recommended-Services" style={{
            padding: '60px 100px',
        }}>
            <div style={{ marginTop: '40px' }}><Content /></div>

        </div>
    )
}
function MDRecommended() {
    return (
        <div id="houseDeck-Recommended-Services" style={{
            padding: '20px',
        }}>

            <div style={{ marginTop: '40px' }}><Content /></div>
        </div>
    )
}


function SMRecommended() {
    return (
        <div id="houseDeck-Recommended-Services" style={{
            padding: '20px',
        }}>

            <div style={{ marginTop: '40px' }}>
                {RecommendedServicesData.map((data,idx) =>
                    <Link key={idx} href={data.url} sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', borderBottom: '1px solid #e0e0e0', textDecoration:'none'}}>
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
                            backgroundImage: `url(${data.img})`,
                            minWidth: '80px',
                            height: '80px', backgroundPosition: '45%',
                            backgroundSize: 'cover',
                        }}>
                        </Box>
                    </Link>

                )}</div>
        </div>
    )
}


export default function Recommended() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:800px)');
    const sm = useMediaQuery('(max-width:800px)');
    return (

        <>
            {xlMax && xlMin && (
                <XLRecommended />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDRecommended />
            )}
            {sm && (<SMRecommended />)}
        </>
    )
}