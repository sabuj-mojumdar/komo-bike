import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useBooking from '../../../Hooks/useBooking';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BillingDetails = ({ openBooking, handleBookingClose, setSuccess }) => {
    const { user } = useAuth();
    const { shoppings } = useBooking();
    const initialInfo = { userName: user.displayName, email: user.email };
    const [billingInfo, setBillinigInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...billingInfo };
        newInfo[field] = value;
        setBillinigInfo(newInfo);
    }

    const handleSubmit = e => {
        fetch('http://localhost:5000/billing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(billingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    handleBookingClose();
                }
            });
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Shopping Items: {shoppings.length}
                    </Typography>
                    <form onSubmit={handleSubmit}>
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
                            type="text"
                            onBlur={handleOnBlur}
                            label="Your phone"
                            size="small"
                            required
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            name="address"
                            type="address"
                            onBlur={handleOnBlur}
                            label="Your address"
                            size="small"
                            required
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            name="thana"
                            type="text"
                            label="Your Thana"
                            onBlur={handleOnBlur}
                            size="small"
                            required
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            name="district"
                            type="text"
                            onBlur={handleOnBlur}
                            label="Your district"
                            size="small"
                            required
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            name="postcode"
                            type="text"
                            onBlur={handleOnBlur}
                            label="Your Postcode"
                            size="small"
                            required
                        />

                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BillingDetails;