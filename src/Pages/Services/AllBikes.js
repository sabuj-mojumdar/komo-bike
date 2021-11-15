import React from 'react';
import Grid from '@mui/material/Grid';
import Bike from './Bike';
import { Container } from '@mui/material';
import useRent from "../../Hooks/useRent";

const AllBikes = () => {
    const { services } = useRent();
    const sliceServices = services.slice(0, 6);
    return (
        <Container sx={{ my: 5 }}>
            <h1>Explore and Find your best Bike</h1>
            <Grid container sx={{ textAlign: 'center' }} spacing={{ xs: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    sliceServices.map(service =>
                        <Bike key={service._id}
                            service={service}
                        />)
                }
            </Grid>
        </Container>
    );
};

export default AllBikes;