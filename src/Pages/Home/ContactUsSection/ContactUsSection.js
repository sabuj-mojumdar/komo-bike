import { Container, Grid, Box, TextField, Button } from '@mui/material';
import React from 'react';
import bike from '../../../images/bike.png';

const ContactUsSection = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
    }


    return (
        <section style={{ margin: "20px 0" }}>
            <Container>
                <h1>Stay with Us Everytime</h1>
                <Grid container height="100%">
                    <Grid item xs={12} md={6} sx={{ m: 'auto 0' }}>
                        <Box sx={{ width: 1 }}>
                            <img style={{ margin: 'auto 0' }} src={bike} alt="contact us Bike" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleOnSubmit}>
                            <Box sx={{ display: 'flex', width: 1 }}>
                                <TextField id="outlined-basic"
                                    sx={{ width: '100%', m: 1 }}
                                    label="Your Name"
                                    variant="outlined" />
                                <TextField id="outlined-basic"
                                    sx={{ width: '100%', m: 1 }}
                                    label="Your Phone"
                                    variant="outlined" />
                            </Box>
                            <TextField id="outlined-basic"
                                sx={{ width: '100%', m: 1 }}
                                label="Your Email"
                                variant="outlined" />
                            <TextField
                                id="outlined-multiline-flexible"
                                sx={{ width: '100%', m: 1 }}
                                label="Your Massage"
                                multiline
                                rows={4}
                            />
                            <Box>
                                <Button variant="contained" sx={{ width: 1, py: 1 }}>Submit</Button>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default ContactUsSection;