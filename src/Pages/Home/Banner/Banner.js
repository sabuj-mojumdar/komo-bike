import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import './Banner.css';
import { Link } from 'react-router-dom';
import { fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}

const Banner = () => {
    return (

        <section className='bannerSection'>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 1 }}>
                <Box>
                    <StyleRoot>
                        <Typography style={styles.fadeInLeft} variant="h2" color="white" fontWeight="bold">Get & go</Typography>
                    </StyleRoot>
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