import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RecommendedServicesData } from '../../constants/data';


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
                    <Box sx={{ width: '30%', cursor: 'pointer', padding: '10px 0px' }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${data.url})`,
                                minWidth: '200px',
                                height: '100px',
                                backgroundSize: 'cover',
                                borderRadius: '4px'
                            }}>
                        </Box>
                        <Box sx={{marginTop:'15px'}}>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#464646'
                            }}>{data.title}</Typography>
                            <Typography variant="body2" sx={{margin:'0px 0px 10px',fontSize:'14px'}} color="#787676">
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
export default function XLRecommendedServices() {
    return (
        <div style={{
            padding: '60px 100px',
        }}>
            <Content />
        </div>
    )
}
