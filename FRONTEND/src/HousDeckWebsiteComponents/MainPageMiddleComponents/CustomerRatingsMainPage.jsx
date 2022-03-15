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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        partialVisibilityGutter: 300
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 200
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 100
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        // partialVisibilityGutter: 30

    }
};
const TopHeadQuestions = {
    fontWeight: '600',
    color: '#464646',
    fontSize: '22px',
    paddingBottom: '50px',
    marginTop: '40px'
}

const RatingFunction = ({ width, height }) => {
    const CardRating = <Rating sx={{ fontSize: '15px', color: '#009587' }} name="read-only" value={5} readOnly />
    return (
        <>
            {CustomerRatings.map(data =>
                <>
                    <Card key={data.name} sx={{
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
                            <Typography  variant="body2" color="text.secondary">
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

            <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                <RatingFunction width={'29%'} height={'220px'} />
            </Box>
        </div>

    )
}


const MDCustomerRatingsMainPage = () => {
    const CardRating = <Rating sx={{ fontSize: '15px', color: '#009587' }} name="read-only" value={5} readOnly />

    return (
        <div id="customer-stories" style={{
            padding: '20px'
        }}>
            <Typography variant='h4' style={TopHeadQuestions}>Customer Stories</Typography>


            <Carousel
                draggable={true}
                responsive={responsive}
                partialVisible={true}
                swipeable={false}
                autoPlay={false}
            >


                {CustomerRatings.map(data =>
                    <div>
                        <Card key={data.name} sx={{
                            maxWidth: '90%',
                            backgroundColor: '#f3f3f3',
                            boxShadow: 0,
                            padding: '19px',
                            outline: 'none',
                            overflowY: 'auto',
                            m: 'auto',
                            marginTop: '10px',
                            height: 'unset',ml:3
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
                                <Typography sx={{ fontSize: '15px' }} variant="body2" color="text.secondary">
                                    {data.text}
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>
                )}
            </Carousel >
        </div >

    )
}

const SMCustomerRatingsMainPage = () => {
    const CardRating = <Rating sx={{ fontSize: '15px', color: '#009587' }} name="read-only" value={5} readOnly />

    return (
        <div id="customer-stories" style={{
            padding: '20px'
        }}>
            <Typography variant='h4' style={TopHeadQuestions}>Customer Stories</Typography>


            <Carousel
                draggable={true}
                responsive={responsive}
                partialVisible={true}
                swipeable={false}
                autoPlay={false}
            >

                {CustomerRatings.map(data =>
                    <div>
                        <Card sx={{
                            maxWidth: '100%',
                            backgroundColor: '#f3f3f3',
                            boxShadow: 0,
                            padding: '19px',
                            outline: 'none',
                            overflowY: 'auto',
                            m: 'auto',
                            marginTop: '10px',
                            height: 'unset',ml:1
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
                                <Typography sx={{ fontSize: '15px' }} variant="body2" color="text.secondary">
                                    {data.text}
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>
                )}
            </Carousel >
        </div >

    )
}
export default function CustomerRatingsMainPage() {
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
