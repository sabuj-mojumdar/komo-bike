import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import { Button, Stack, TableRow, InputLabel, MenuItem, FormControl, Select, Alert } from '@mui/material';
import useOrders from '../../../Hooks/useOrders';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';


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

const ManageOrder = ({ order }) => {
    const { id, name, count, total, payment } = order;

    const [ordersInfo, setOrdersInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...ordersInfo };
        newInfo[field] = value;
        setOrdersInfo(newInfo);
    }

    const handleUpdate = e => {
        const url = `https://dry-shelf-32044.herokuapp.com/orders/1179`;
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

    const { success, handleDeletebook } = useOrders();

    return (
        <>
            {success ?
                <StyledTableRow>
                    <StyledTableCell colspan={7}>
                        < Alert severity="success" > One Item Successfully deleted</Alert >
                    </StyledTableCell>
                </StyledTableRow >
                : <StyledTableRow>
                    <StyledTableCell>{id}</StyledTableCell>
                    <StyledTableCell>{name}</StyledTableCell>
                    <StyledTableCell>{count}</StyledTableCell>
                    <StyledTableCell>{total}</StyledTableCell>
                    <StyledTableCell>{payment}</StyledTableCell>
                    <StyledTableCell>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="status"
                                onBlur={handleOnBlur}
                                label="Status"
                                required
                            >
                                <MenuItem value={"Pending"}>Pending</MenuItem>
                                <MenuItem value={"Progracing"}>Progracing</MenuItem>
                                <MenuItem value={"Canceled"}>Canceled</MenuItem>
                                <MenuItem value={"Payment Recieved"}>Payment Recieved</MenuItem>
                            </Select>
                        </FormControl>
                    </StyledTableCell>
                    <StyledTableCell>
                        <Stack>
                            <Button onClick={handleUpdate}><EditIcon /></Button>
                            <Button onClick={() => handleDeletebook(id)} color="error"><RestoreFromTrashIcon /></Button>
                        </Stack>
                    </StyledTableCell>
                </StyledTableRow>}
        </>
    );
};

export default ManageOrder;