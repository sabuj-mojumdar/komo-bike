import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from "./../../Hooks/useAuth";
import Navigation from "../../Components/Navigation/Navigation";
import bike2 from "../../images/bike2.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, loginData.imgUrl, history);
        e.preventDefault();
    }
    return (
        <>
            <Navigation />
            <Container>
                <Grid container spacing={2}>

                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>Register</Typography>                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" required />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your image url"
                                name="imgUrl"
                                onBlur={handleOnBlur}
                                variant="standard" required />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" required />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" required />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" required />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text" color="secondary">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ m: 'auto 0' }}>
                        <img src={bike2} alt="register" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;