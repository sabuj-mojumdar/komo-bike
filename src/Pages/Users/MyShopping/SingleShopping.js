import React from 'react';
import { Button, TableCell, TableRow, Typography, Alert } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useBooking from '../../../Hooks/useBooking';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const SingleShopping = ({ shop }) => {
    const { _id, img, serviceName, price } = shop;

    const { handleDeleteBooking, success } = useBooking();
    return (
        <>
            {success ? <TableRow>
                <TableCell colSpan={3}>
                    <Alert severity="success">One Item Successfully deleted</Alert>
                </TableCell>
            </TableRow> :
                <TableRow>
                    <TableCell sx={{ width: 160 }}>
                        <img style={{ width: "150px" }} src={img} alt="product name" />
                    </TableCell>
                    <TableCell>
                        <Typography variant="h4" fontWeight="bold" color="red">{serviceName}</Typography>
                        <Typography variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                    </TableCell>
                    <TableCell sx={{ width: 170, position: 'relative' }}>
                        <Typography variant="p" sx={{ position: 'absolute', top: 0, right: 0, p: 1, bgcolor: 'success.main', color: 'white', }}>20% Off</Typography>
                        <Typography variant="p">Prices</Typography>
                        <Typography variant="h5" color="red" fontWeight="bold">${price}</Typography>
                        <Button onClick={() => handleDeleteBooking(_id)} sx={{ position: 'absolute', bottom: 0, right: 0, color: 'red' }}>
                            <DeleteForeverIcon fontSize="large" />
                        </Button>
                    </TableCell>
                </TableRow>}
        </>
    );
};

export default SingleShopping;