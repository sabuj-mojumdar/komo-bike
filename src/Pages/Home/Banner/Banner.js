import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import './Banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {

    return (

        <section className='bannerSection'>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 1 }}>
                <Box>
                    <Typography variant="h2" color="white" fontWeight="bold">Get & go</Typography>
                    <Typography variant="h4" color="lightgray" fontWeight="bold">Your Cycle When You need Most</Typography>
                    <Typography variant="h5" color="white" fontWeight="bold">Renting a bike to Explore new town. </Typography>
                    <Box sx={{ my: 5 }}>
                        <Link to="/explore-bikes">
                            <Button variant='contained' sx={{ py: 1, px: 2, fontSize: '20px' }} color="secondary">Find Your best Cycle</Button></Link>
                    </Box>
                </Box>
            </Grid>
        </section>
    );
};

export default Banner;