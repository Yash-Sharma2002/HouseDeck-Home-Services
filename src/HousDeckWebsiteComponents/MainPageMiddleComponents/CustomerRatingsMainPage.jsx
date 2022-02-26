import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { CustomerRatings } from '../../constants/data';
import { useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';



const TopHeadQuestions = {
    fontWeight: '600',
    color: '#464646',
    fontSize: '22px',
    paddingBottom: '50px',
    marginTop:'40px'
}

const RatingFunction = ({ width, height }) => {
    const CardRating = <Rating sx={{ fontSize: '15px', color: '#009587' }} name="read-only" value={5} readOnly />
    return (
        <>
            {CustomerRatings.map(data =>
                <>
                    <Card sx={{
                        maxWidth: width,
                        backgroundColor: '#f3f3f3',
                        boxShadow: 0,
                        padding: '19px',
                        outline: 'none',
                        overflowY: 'auto',
                        m: 'auto',
                        marginTop: '10px',
                        height: height
                    }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="rating">
                                    {data.key}
                                </Avatar>
                            }
                            sx={{ marginTop: -1 }}
                            title={data.name}
                            subheader={CardRating}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {data.text}
                            </Typography>
                        </CardContent>

                    </Card>
                </>
            )}
        </>
    )
}

function XLCustomerRatingsMainPage() {

    return (
        <div id="customer-stories" style={{
            padding: '60px 100px'
        }}>
            <Typography variant='h4' style={TopHeadQuestions}>Customer Stories</Typography>

            <Box sx={{ display: 'flex',marginLeft:'10px' }}>
                <RatingFunction width={'29%'} height={'205px'} />
            </Box>
        </div>

    )
}


const MDCustomerRatingsMainPage = () => {

    return (
        <div id="customer-stories" style={{
            padding: '20px'
        }}>
            <Typography variant='h4' style={TopHeadQuestions}>Customer Stories</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 'auto' }}>
                <RatingFunction width={'29%'} height={'unset'} />
            </Box>
        </div>

    )
}

const SMCustomerRatingsMainPage = () => {

    return (
        <div id="customer-stories" style={{
            padding: '20px'
        }}>
            <Typography variant='h4' style={TopHeadQuestions}>Customer Stories</Typography>
           
            <Box sx={{ display: 'block', justifyContent: 'space-between', m: 'auto' }}>
                
            <RatingFunction width={'90%'} height={'unset'} />
             </Box>

        </div>

    )
}


export default function CustomerRatingsMainPage(){
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:1000px)');
    const sm = useMediaQuery('(max-width:1000px)');
    return (

        <>
            {xlMax && xlMin && (
                <XLCustomerRatingsMainPage />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDCustomerRatingsMainPage />
            )}
            {sm && (<SMCustomerRatingsMainPage />)}
        </>
    )
}
