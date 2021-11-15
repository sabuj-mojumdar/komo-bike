import { Button, Grid, Table, TableBody, TableContainer, } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Paper from '@mui/material/Paper';
import SingleShopping from './SingleShopping';
import useBooking from '../../../Hooks/useBooking';
import { Link } from 'react-router-dom';

const MyShopping = () => {
    const { shoppings } = useBooking();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box>
                        <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', boxShadow: 3, borderRadius: '20px' }}><h2 style={{ padding: '10px' }}>My Shopping {shoppings.length}</h2></Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableBody>
                                    {
                                        shoppings.map(shop => <SingleShopping
                                            key={shop._id}
                                            shop={shop}
                                        />)
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ mb: 5, mt: 3 }}>
                            <Link to='/dashboard/checkout'>
                                <Button variant="contained" sx={{ width: 1 }} color="secondary">Checkout</Button></Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyShopping;