import { Container, Grid, Box, TextField, Button } from '@mui/material';
import React from 'react';
import useContact from '../../../Hooks/useContact';
import useAuth from '../../../Hooks/useAuth';
import bike from '../../../images/bike.png';
import { fadeInLeft } from 'react-animations';

import Radium, { StyleRoot } from 'radium';
const styles = {
    fadeInLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}

const ContactUsSection = () => {
    const { user } = useAuth();
    const { success, handleOnBlur, handleOnSubmit } = useContact();


    return (
        <section style={{ margin: "20px 0" }}>
            <Container>
                <StyleRoot>
                    <h1 style={styles.fadeInLeft}>Stay with Us Everytime</h1>
                </StyleRoot>
                <Grid container height="100%">
                    <Grid data-aos="fade-left" item xs={12} md={6} sx={{ m: 'auto 0' }}>
                        <Box sx={{ width: 1, p: 5 }}>
                            <img style={{ margin: 'auto 0', width: '100%' }} src={bike} alt="contact us Bike" />
                        </Box>
                    </Grid>
                    <Grid data-aos="fade-right" item xs={12} md={6}>
                        <form onSubmit={handleOnSubmit}>
                            <Box sx={{ display: 'flex', width: 1 }}>
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    name="userName"
                                    label="Your Name"
                                    defaultValue={user.displayName}
                                    type="name"
                                    onBlur={handleOnBlur}
                                    required
                                    variant="outlined" />
                                <TextField
                                    sx={{ width: '100%', m: 1 }}
                                    label="Your Phone"
                                    name="phone"
                                    type="phone"
                                    onBlur={handleOnBlur}
                                    required
                                    variant="outlined" />
                            </Box>
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                label="Your Email"
                                defaultValue={user.email}
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                required
                                variant="outlined" />
                            <TextField
                                id="outlined-multiline-flexible"
                                sx={{ width: '100%', m: 1 }}
                                name="message"
                                label="Your Massage"
                                type="message"
                                onBlur={handleOnBlur}
                                required
                                multiline
                                rows={4}
                            />
                            <Box>
                                {success ?
                                    <Button variant="contained" color="secondary" sx={{ width: 1, py: 1 }}>Thank You to Message Us</Button>
                                    :
                                    <Button variant="contained" type="submit" sx={{ width: 1, py: 1 }}>Submit</Button>}
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default ContactUsSection;