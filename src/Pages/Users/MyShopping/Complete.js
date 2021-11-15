import { Button, Grid, Typography, TextField, TextareaAutosize, Box } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Complete = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const [reviewInfo, setReviewInfo] = useState({ name: user.displayName, email: user.email, imgUrl: user.photoURL });

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }
    const handleOnsubmit = e => {
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Review Submited');
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <Grid container spacing={2}>
            {success ?
                <Grid item xs={12}>
                    <Typography variant="h4" color="secondary">Thank you For giving your valuable Information</Typography>
                    <Typography variant="h4" color="primary">Now Your Order is Successfully Completed</Typography>
                    <Link to="/">
                        <Button variant="contained" color="secondary">Back to shop</Button>
                    </Link>
                </Grid>
                : <Grid item xs={12}>
                    <Typography variant="h5">Please Give your Valueable review.</Typography>
                    <form onSubmit={handleOnsubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            name="name"
                            type="text"
                            defaultValue={user.displayName}
                            label="Your Name"
                            size="small"
                            disabled
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            name="email"
                            type="text"
                            defaultValue={user.email}
                            label="Your Email"
                            size="small"
                            disabled
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            name="review"
                            type="number"
                            onBlur={handleOnBlur}
                            placeholder="Add Number 1 to 5"
                            label="Add review"
                            size="small"
                            required
                        />
                        <TextareaAutosize
                            style={{ width: '90%', fontSize: '16px' }}
                            aria-label="minimum height"
                            minRows={4}
                            name="comments"
                            onBlur={handleOnBlur}
                            placeholder="Add Some Comments."
                            required
                        />
                        <Box>
                            <Button type="submit" variant="contained" color="error">Submit</Button>
                        </Box>
                    </form>
                </Grid>}

        </Grid >
    );
};

export default Complete;