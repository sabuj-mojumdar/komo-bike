import React from 'react';
import Grid from '@mui/material/Grid';
import Bike from './Bike';
import { Container } from '@mui/material';
import useRent from "../../Hooks/useRent";
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInUp: {
        animation: 'x 4s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

const AllBikes = () => {
    const { services, isLoading } = useRent();
    const sliceServices = services.slice(0, 6);
    return (
        <Container sx={{ my: 5 }}>
            <StyleRoot>
                <h1 style={styles.fadeInUp} >Explore and Find your best Bike</h1>
            </StyleRoot>
            {isLoading ? <h1>Loading....</h1> : <Grid container sx={{ textAlign: 'center' }} spacing={3}>
                {
                    sliceServices.map(service =>
                        <Bike key={service._id}
                            service={service}
                        />)
                }
            </Grid>}
        </Container>
    );
};

export default AllBikes;