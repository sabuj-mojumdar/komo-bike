import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box, Grid, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import useBooking from '../../../Hooks/useBooking';
import useAuth from '../../../Hooks/useAuth';

const OrderComplete = () => {
    const { user } = useAuth();
    const { success, handleDeleteAllBooking } = useBooking();

    const { orId } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://dry-shelf-32044.herokuapp.com/orders/${orId}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orId]);


    return (
        <div>
            <p>Thank you. Your order has been received.</p>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box>
                        <Typography variant="h4" sx={{ my: 3 }}>Order Summary</Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Order</TableCell>
                                        <TableCell align='center'>Total Item</TableCell>
                                        <TableCell align='center'>Date</TableCell>
                                        <TableCell align='center'>Total</TableCell>
                                        <TableCell align='center'>Payment</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.map(od => <TableRow key={od._id}>
                                        <TableCell align='center'>{od.id}</TableCell>
                                        <TableCell align='center'>{od.count}</TableCell>
                                        <TableCell align='center'>{od.date}</TableCell>
                                        <TableCell align='center'>${od.total}</TableCell>
                                        <TableCell align='center'>{od.payment}</TableCell>
                                    </TableRow>)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ mt: 5 }}>
                {success && <p>Your order is successfully added.</p>}
                <Button variant="contained" onClick={() => handleDeleteAllBooking(user.email)}>Complete your Order</Button>
            </Box>
        </div>
    );
};

export default OrderComplete;