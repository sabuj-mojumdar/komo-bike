import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import useReview from '../../../Hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const { reviews } = useReview();

    return (
        <Container sx={{ my: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', my: 3 }}>User Review</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {reviews.map(rw =>
                        <Review
                            key={rw._id}
                            rw={rw}
                        />)}
                </Grid>
            </Box>
        </Container>
    );
};

export default Reviews;