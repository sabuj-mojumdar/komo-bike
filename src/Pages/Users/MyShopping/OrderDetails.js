import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';


const OrderDetails = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Item>xs=6 md=8</Item>
    );
};

export default OrderDetails;