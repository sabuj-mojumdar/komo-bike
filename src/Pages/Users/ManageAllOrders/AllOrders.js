import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Table, TableBody, TableContainer, Box, Paper, TableRow, TableHead, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function AllOrders() {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    const [ordersInfo, setOrdersInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...ordersInfo };
        newInfo[field] = value;
        setOrdersInfo(newInfo);
    }

    const handleUpdate = e => {
        const url = `http://localhost:5000/orders/1179`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordersInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("updated successfully.");
                    setOrdersInfo({});
                }
            })
        e.preventDefault();
    }

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
                                <StyledTableRow key={order._id}>
                                    <StyledTableCell>{order.id}</StyledTableCell>
                                    <StyledTableCell>{order.name}</StyledTableCell>
                                    <StyledTableCell>{order.count}</StyledTableCell>
                                    <StyledTableCell>{order.total}</StyledTableCell>
                                    <StyledTableCell>{order.payment}</StyledTableCell>
                                    <StyledTableCell>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="status"
                                                onBlur={handleOnBlur}
                                                label="Age"
                                            >
                                                <MenuItem value={"Pending"}>Pending</MenuItem>
                                                <MenuItem value={"Progracing"}>Progracing</MenuItem>
                                                <MenuItem value={"Canceled"}>Canceled</MenuItem>
                                                <MenuItem value={"Payment Recieved"}>Payment Recieved</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </StyledTableCell>
                                    <StyledTableCell><Button onClick={handleUpdate}>Update</Button></StyledTableCell>
                                </StyledTableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
