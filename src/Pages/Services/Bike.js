import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import BookingModal from './BookingModal';
import { NavLink } from 'react-router-dom';

const Bike = ({ service }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const { userName, description, serviceName, price, imgUrl } = service;

    const desSlice = description.slice(0, 150);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'left',
    }));
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={2} sm={4} md={4}>
                <Item>
                    <Card sx={{ width: 1, border: 0, boxShadow: 0 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'secondary.main', fontWeight: 'bold' }} aria-label="recipe">
                                    {serviceName[0]}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={serviceName}
                            subheader={`Add by ${userName}`}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={imgUrl}
                            alt={serviceName}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                {desSlice}
                            </Typography>

                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }} disableSpacing>
                            <h2>Price: ${price}</h2>
                            <Box>
                                {bookingSuccess ? <NavLink to="/dashboard/myshopping" style={{ textDecoration: 'none' }}>
                                    <Button variant='contained' color="secondary">Go to Cart</Button>
                                </NavLink> :
                                    <Button onClick={handleBookingOpen} variant='contained'>Buy Now</Button>}
                            </Box>
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <BookingModal
                service={service}
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>

    );
};

export default Bike;