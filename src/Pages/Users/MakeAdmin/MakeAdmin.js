import { Button, TextField, Alert, Container, Grid, Box } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://dry-shelf-32044.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <section>
            <Container>
                <h1>Make an Admin</h1>
                <Grid container sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ width: 1 }}>
                            <img src="https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg" alt="admin_image" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <form onSubmit={handleAdminSubmit}>
                            <TextField
                                sx={{ width: '100%' }}
                                label="Email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <Box sx={{ width: 1 }}>
                                <Button sx={{ width: 1, my: 2 }} type="submit" variant="contained">Make Admin</Button>
                            </Box>
                        </form>
                        {success && <Alert severity="success">Made Admin successfully!</Alert>}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default MakeAdmin;