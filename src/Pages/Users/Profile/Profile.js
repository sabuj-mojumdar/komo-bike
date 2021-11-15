import { Button, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box>
                        <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', boxShadow: 3, borderRadius: '20px' }}><h2 style={{ padding: '10px' }}>My Profile</h2></Box>
                        <Box>
                            <img width="120px" src={user.photoURL} alt={user.displayName} />
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableBody>
                                    <TableRow >
                                        <TableCell sx={{ width: '20%' }}><h3>User Name</h3> </TableCell>
                                        <TableCell><h3>: {user.displayName}</h3></TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell sx={{ width: '20%' }}><h3>User Email</h3> </TableCell>
                                        <TableCell><h3>: {user.email}</h3></TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell sx={{ width: '20%' }}><h3>Phone Number</h3> </TableCell>
                                        <TableCell><h3>: +0123456789</h3></TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell sx={{ width: '20%' }}><h3>Address</h3> </TableCell>
                                        <TableCell><h3>: MirPur, Dhaka, Bangladesh</h3></TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell sx={{ width: '20%' }}><h3>Date Of Birth</h3> </TableCell>
                                        <TableCell><h3>: 01 January,200</h3></TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell sx={{ width: '20%' }}><h3>Status</h3> </TableCell>
                                        <TableCell><h3>: <span style={{ backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '10px' }}>Active</span></h3></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;