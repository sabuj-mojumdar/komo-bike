import { Grid, Stack, Divider, Typography, Container } from '@mui/material';
import { NavLink } from "react-router-dom";
import React from 'react';

const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: '#30343e', color: '#caced9', padding: '15px 10px' }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{ textAlign: 'left' }}>
                            <Typography variant="p">Hours of Operation: </Typography><br />
                            <Typography variant="p">7:00 am - 9:00 pm (Mon - Sun)</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="p">Call us: </Typography><br />
                            <Typography variant="p">01812435207</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ textAlign: 'left' }}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <h2 style={{ margin: 0 }}>Bikes</h2>
                            <Divider />
                            <Stack>
                                <NavLink style={{ color: 'white' }} to="/">Handbrake Bike</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Footbrake Bike</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Small Bike</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Gentlemen’s Bike</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Kids Bike</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Tandem Bike</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Electric Bike</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Cargo Bike</NavLink>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <h2 style={{ margin: 0 }}>Tours</h2>
                            <Divider />
                            <Stack>
                                <NavLink style={{ color: 'white' }} to="/">Family friendly tours</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Explore Central Park in one day</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Climb to the highest peak</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Holiday & seasonal tours</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Explore Central Park</NavLink>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <h2 style={{ margin: 0 }}>Locations</h2>
                            <Divider />
                            <Stack>
                                <NavLink style={{ color: 'white' }} to="/">Kona Central Park:</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">203 West 58th Street</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">+800-567-8990</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Kona Central Park:</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">203 West 58th Street</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">+800-567-8990</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Kona Central Park:</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">203 West 58th Street</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">+800-567-8990</NavLink>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <h2 style={{ margin: 0, color: '#caced9' }}>About</h2>
                            <Divider />
                            <Stack>
                                <NavLink style={{ color: 'white' }} to="/">About Us</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">FAQ</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Comming Soon</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Appointments</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Events</NavLink>
                                <NavLink style={{ color: 'white' }} to="/">Feature List</NavLink>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section style={{ backgroundColor: '#3e4452', color: 'white', padding: "15px 0" }}>
                <Typography variant="h5">© 2021 Bike Rental site / Sabuj Majumdar</Typography>
            </section>
        </>
    );
};

export default Footer;