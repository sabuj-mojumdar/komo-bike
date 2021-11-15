import React from 'react';
import useOrders from '../../../../Hooks/useOrders';
import { Alert, Button, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const SingleOrder = ({ order }) => {
    const { success, handleDeletebook } = useOrders();
    const { id, name, count, total, payment, status } = order;
    return (
        <>
            {
                success ?
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
                        <StyledTableCell>{status}</StyledTableCell>
                        <StyledTableCell>
                            <Button variant="contained" onClick={() => handleDeletebook(order.id)}><AutoDeleteIcon /></Button>
                        </StyledTableCell>

                    </StyledTableRow>}
        </>
    );
};

export default SingleOrder;