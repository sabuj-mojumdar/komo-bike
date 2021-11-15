import React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, Box, Paper, TableRow, TableHead, } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import SingleOrder from './SingleOrder';
import useOrders from '../../../../Hooks/useOrders';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


export default function DashboardHome() {
    const { success, allOrders } = useOrders();

    return (
        <Box>
            <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', boxShadow: 3, borderRadius: '20px' }}>
                <h2 style={{ padding: '10px' }}>Manage All Orders</h2></Box>
            {success && <h1>One order is successfully deleted.</h1>}
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
                            <StyledTableCell>Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrders.map(order =>
                                <SingleOrder key={order._id} order={order} />
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
