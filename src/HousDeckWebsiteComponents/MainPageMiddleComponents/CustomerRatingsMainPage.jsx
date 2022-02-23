import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { CustomerRatings } from '../../constants/data';
import Rating from '@mui/material/Rating';



const TopHeadQuestions = {
    fontWeight: '600',
    color: '#464646',
    fontSize: '22px',
    paddingBottom: '50px',
}

const RatingFunction = () => {
    const CardRating = <Rating sx={{ fontSize: '15px', color: '#009587' }} name="read-only" value={5} readOnly />
    return (
        <>
            <Typography variant='h4' style={TopHeadQuestions}>Customer Stories</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 'auto' }}>
                {CustomerRatings.map(data =>
                    <>
                        <Card sx={{ maxWidth: 390, 
                            backgroundColor: '#f3f3f3',
                            boxShadow:0,
                            height:'216px',
                            paddng:'19px',
                            outline:'none' }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="rating">
                                        {data.key}
                                    </Avatar>
                                }
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
            </Box>
        </>
    )
}

export default function XLCustomerRatingsMainPage() {

    return (
        <div style={{
            padding: '60px 100px'
        }}><RatingFunction /></div>

    )
}
