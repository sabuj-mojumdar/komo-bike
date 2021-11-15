import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, Box, Paper, TableRow, TableHead, } from '@mui/material';
import ManageOrder from './ManageOrder';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function AllOrders() {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://dry-shelf-32044.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    return (
        <Box>
            <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', boxShadow: 3, borderRadius: '20px' }}>
                <h2 style={{ padding: '10px' }}>Manage All Orders</h2></Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Order Id</StyledTableCell>
                            <StyledTableCell>Customer Name</StyledTableCell>
                            <StyledTableCell>Total Order</StyledTableCell>
                            <StyledTableCell>Total</StyledTableCell>
                            <StyledTableCell>Payment</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Update</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrders.map(order =>
                                <ManageOrder key={order._id}
                                    order={order} />
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
