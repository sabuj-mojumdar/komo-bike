import { Divider, Stack, Typography, Box } from '@mui/material';
import React from 'react';

const Orders = ({ shop }) => {
    const { serviceName, price, img, hour } = shop;
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Stack sx={{ textAlign: 'left' }}>
                    <Box>
                        <img style={{ width: '80px' }} src={img} alt={serviceName} />
                    </Box>
                </Stack>
                <Stack sx={{ textAlign: 'left' }}>
                    <Typography variant="p">
                        {serviceName}
                    </Typography>
                    <Typography variant="p">
                        ({hour} hour)
                    </Typography>
                </Stack>
                <Typography variant="p">
                    ${price}
                </Typography>
            </Box>
            <Divider />
        </div>
    );
};

export default Orders;