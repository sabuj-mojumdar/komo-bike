import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
import { Grid, Box, Typography, Divider, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import Orders from './Orders';
import useBooking from '../../../Hooks/useBooking';
import useAuth from '../../../Hooks/useAuth';

const CheckOut = () => {
    const { user } = useAuth();
    const { shoppings } = useBooking();


    const [success, setSuccess] = useState(false);
    let total = 0;
    let count = 0;
    for (const shop of shoppings) {
        count = count + 1;
        total = total + parseInt(shop.price);
    }
    const shipping = total > 50 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    const newDate = new Date().toDateString();
    const orderId = Math.ceil(Math.random() * 10000);

    const orId = orderId.toString();
    const history = useHistory();


    const [ordersInfo, setOrdersInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...ordersInfo };
        newInfo[field] = value;
        setOrdersInfo(newInfo);
    }

    const handlePlaceOrder = e => {
        const initialInfo = {
            ...ordersInfo,
            id: orId,
            name: user.displayName,
            email: user.email,
            total: grandTotal,
            date: newDate,
            count: count
        };
        fetch('https://dry-shelf-32044.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(initialInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order is submited');
                    setSuccess(true);
                    history.push(`/dashboard/order-complete/${orId}`)
                }
            })
        e.preventDefault();

    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    {success ? <h1>Your Order successfully added</h1> : <h1>Billing Information</h1>}
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        name="userName"
                        label="Your Name"
                        size="small"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your email"
                        name="email"
                        size="small"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        name="phone"
                        type="number"
                        onBlur={handleOnBlur}
                        label="Your phone"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        name="address"
                        type="text"
                        onBlur={handleOnBlur}
                        label="Your address"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        name="thana"
                        type="text"
                        label="Your Thana"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        name="district"
                        type="text"
                        onBlur={handleOnBlur}
                        label="Your district"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        name="postcode"
                        type="postcode"
                        onBlur={handleOnBlur}
                        label="Your Postcode"
                        size="small"
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <h1>Your Orders</h1>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">
                            image
                        </Typography>
                        <Typography variant="h6">
                            Products
                        </Typography>
                        <Typography variant="h6">
                            total
                        </Typography>
                    </Box>
                    <Divider />
                    {
                        shoppings.map(shop => <Orders
                            key={shop._id}
                            shop={shop}
                        />)
                    }

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Typography variant="h6">
                            Total
                        </Typography>
                        <Typography variant="h6">
                            $ {total}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Typography variant="h6">
                            Shipping
                        </Typography>
                        <Typography variant="h6">
                            $ {shipping}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Typography variant="h6">
                            Tax
                        </Typography>
                        <Typography variant="h6">
                            $ {tax}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Typography variant="h6" color="error">
                            GrandTotal
                        </Typography>
                        <Typography variant="h6" color='error'>
                            $ {grandTotal}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" color="error">
                            Payment
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="Payment method"
                                name="payment"
                            >
                                <Box>
                                    <FormControlLabel
                                        value="Cash on Delivery"
                                        onBlur={handleOnBlur}
                                        control={<Radio />}
                                        label="Cash on Delivery" />
                                    <FormControlLabel
                                        value="Bank Transfer"
                                        onBlur={handleOnBlur}
                                        control={<Radio />}
                                        label="Bank Transfer" />
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box sx={{ my: 3 }}>
                        <Button variant="contained" color="error" onClick={handlePlaceOrder} sx={{ width: 1 }}>Place Order</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default CheckOut;