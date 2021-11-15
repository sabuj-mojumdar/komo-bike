import { Grid, Card, CardContent, Typography, CardActions, } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const Review = ({ rw }) => {
    const { name, imgUrl, review, comments } = rw;
    const comment = comments.slice(0, 100);
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, maxHeight: 310, height: 1 }}>
                <img src={imgUrl} alt={name} width="100px" height="100px" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                </CardContent>
                <CardActions>
                    <p>Review: </p>
                    <Rating initialRating={review} readonly />
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Review;