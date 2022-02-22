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

export default function CustomerRatingsMainPage() {

    const CardRating =  <Rating sx={{fontSize:'15px'}} name="read-only" value={5} readOnly />
    return (
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            {CustomerRatings.map(data =>
                <>
                    <Card sx={{ maxWidth: 345,backgroundColor:'#f3f3f3' }}>
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
    )
}
