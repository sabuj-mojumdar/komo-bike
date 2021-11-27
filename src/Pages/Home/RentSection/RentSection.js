import React from 'react';
import { Container, Grid, Card, Box, CardContent, Typography } from '@mui/material';

const RentSection = () => {
    return (
        <Container sx={{ my: 5 }}>
            <h2>Why to Rent Our Bike?</h2>
            <Grid container spacing={3}>
                <Grid data-aos="zoom-in" item xs={12} sm={6} md={4}>
                    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
                                <Typography component="div" variant="h5">
                                    Many Types of Bikes
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    We can fit you with the perfect bike because we carry all sizes and
                                    of bikes.
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ p: '20px', fontSize: '50px', bgcolor: 'orange', borderRadius: '100%', mr: '10px' }}>
                            <i className="fas fa-biking"></i>
                        </Box>
                    </Card>
                </Grid>

                <Grid data-aos="zoom-in" item xs={12} sm={6} md={4}>
                    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
                                <Typography component="div" variant="h5">
                                    Best Bikes in Town
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Comfort. Safety. Our equipment is guaranteed to make your biking experience 100% stree-free.
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ p: '20px', fontSize: '50px', bgcolor: 'orange', borderRadius: '100%', mr: '10px' }}>
                            <i className="fas fa-user-shield"></i>                        </Box>
                    </Card>
                </Grid>
                <Grid data-aos="zoom-in" item xs={12} sm={6} md={4}>
                    <Card data-aos="zoom-in" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
                                <Typography component="div" variant="h5">
                                    Longest Opening Hours
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Have all the time in the world? Rent for an entire day and explore New York City at your leisure.
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ p: '20px', fontSize: '50px', bgcolor: 'orange', borderRadius: '100%', mr: '10px' }}>
                            <i className="fas fa-user-clock"></i>                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RentSection;