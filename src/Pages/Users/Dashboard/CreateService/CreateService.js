import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
import useOrder from '../../../../Hooks/useOrder';

const CreateService = () => {
    const { user } = useAuth();
    const { handleOnBlur, handleCreateService, success } = useOrder();
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
                    name="service"
                    onBlur={handleOnBlur}
                    placeholder="Service Name"
                    size="small" required
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    name="model"
                    onBlur={handleOnBlur}
                    placeholder="Model Name"
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
                {success && <Alert severity="success">One Service inserted successfully!</Alert>}
            </form>
        </div>
    );
};

export default CreateService;