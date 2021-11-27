import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useAuth from '../../../Hooks/useAuth';
import { Alert } from '@mui/material';

const CreateService = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const userInfo = { userName: user.displayName, email: user.email };

    const [newService, setNewService] = useState(userInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...newService };
        newInfo[field] = value;
        setNewService(newInfo);
    }
    const handleCreateService = e => {

        fetch('https://dry-shelf-32044.herokuapp.com/rentals', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('One service is added.');
                    setSuccess(true);
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleCreateService}>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    name="userName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                    required
                />

                <TextField
                    sx={{ width: '90%', m: 1 }}
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                    required
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    name="serviceName"
                    onBlur={handleOnBlur}
                    placeholder="Service Name"
                    size="small" required
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    name="description"
                    onBlur={handleOnBlur}
                    placeholder="Bike Description"
                    size="small" required
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    name="price"
                    onBlur={handleOnBlur}
                    type="number"
                    placeholder="price"
                    size="small" required
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    name="imgUrl"
                    onBlur={handleOnBlur}
                    placeholder="https://imgurl.com"
                    size="small"
                    required
                />
                <Box>
                    <Button type="submit" variant="contained">Submit</Button>
                </Box>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </form>
        </div>
    );
};

export default CreateService;