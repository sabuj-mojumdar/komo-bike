import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
    const theme = useTheme();
    const { user, logout } = useAuth();
    const useStyle = makeStyles({
        navItem: {
            color: 'white',
            textDecoration: 'none'
        },
        navDrawer: {
            color: 'black',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            }
        },
        navMenu: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        }

    });

    const { navItem, navIcon, navMenu, navLogo, navDrawer } = useStyle();
    //drawer
    const [state, setState] = React.useState(false);


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={navLogo} sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Komo Bike
                        </Typography>
                        <Box className={navMenu} sx={{ display: 'flex' }}>
                            <NavLink className={navItem} to="/Home">
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink className={navItem} to="/explore-bikes">
                                <Button color="inherit">Explore All Bikes</Button>
                            </NavLink>
                            {
                                user?.email ?
                                    <Box>
                                        <NavLink className={navItem} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </NavLink>
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <NavLink className={navItem} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <NavLink className={navDrawer} to="/">
                                    <ListItem button>
                                        <ListItemText>
                                            Home
                                        </ListItemText>
                                    </ListItem>
                                </NavLink>
                                <Divider />
                                <NavLink className={navDrawer} to="/dashboard">
                                    <ListItem button>
                                        <ListItemText>
                                            Dashboard
                                        </ListItemText>
                                    </ListItem>
                                </NavLink>
                                <Divider />
                                <NavLink className={navDrawer} to="/login">
                                    <ListItem button>
                                        <ListItemText>
                                            Login
                                        </ListItemText>
                                    </ListItem>
                                </NavLink>
                                <Divider />
                                <NavLink className={navDrawer} to="/register">
                                    <ListItem button>
                                        <ListItemText>
                                            Register
                                        </ListItemText>
                                    </ListItem>
                                </NavLink>
                                <Divider />
                            </List>

                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;
