import React from 'react';
import useRent from '../../Hooks/useRent';
import { Container, Grid, Typography } from '@mui/material';
import Bike from '../Services/Bike';
import Footer from '../../Components/Footer/Footer';
import Navigation from '../../Components/Navigation/Navigation';

const ExploreAllBike = () => {
    const { services } = useRent();
    return (
        <>
            <Navigation />
            <Container sx={{ my: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Explore All Bikes  Here.</Typography>
                <Grid container sx={{ textAlign: 'center' }} spacing={{ xs: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Bike key={service._id}
                                service={service}
                            />)
                    }
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default ExploreAllBike;