import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Toolbar from '@mui/material/Toolbar';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import Profile from '../Profile/Profile';
// import MyShopping from '../MyShopping/MyShopping';
import CreateService from '../CreateService/CreateService';
import DashboardHome from './DashboardHome/DashboardHome';
import AdminRoute from "../AdminRoute/AdminRoute";
import CheckOut from '../MyShopping/CheckOut';
import Complete from '../MyShopping/Complete';
import OrderComplete from '../MyShopping/OrderComplete';
import MyShopping from '../MyShopping/MyShopping';
import AllOrders from '../ManageAllOrders/AllOrders';
import PayNow from '../PayNow/PayNow';
import ReducerPractice from './ReducerPractice/ReducerPractice';
import ComplexCounter from './ReducerPractice/ComplexCounter';
import Counter3 from './ReducerPractice/Counter3';
import DataFetch from './ReducerPractice/DataFetch';
import StyledComponent from './Styled/StyledComponent';

const drawerWidth = 280;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logout, admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Link to="/"> <h2>Komo Bike</h2></Link>
            <Divider />
            <Box sx={{ mx: 2 }}>
                <div>
                    <img style={{ width: '150px', padding: '0px' }} src={user.photoURL} alt={user.displayName} />

                </div>
                <Link to={`${url}`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>DashBoard</Typography>
                        <DashboardIcon />
                    </Box>
                </Link>
                <Link to={`${url}/myshopping`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>My Shopping</Typography>
                        <ShoppingCartIcon />
                    </Box>
                </Link>
                <Link to={`${url}/paynow`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Pay Now</Typography>
                        <ShoppingCartIcon />
                    </Box>
                </Link>

                <Link to={`${url}/review`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>My Review</Typography>
                        <ShoppingCartIcon />
                    </Box>
                </Link>

                <Link to={`${url}/profile`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Profile</Typography>
                        <AssignmentIndIcon />
                    </Box>
                </Link>

                {admin && <Box>
                    <Link to={`${url}/allorders`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Manage All Orders</Typography>
                            <ShoppingCartIcon />
                        </Box>
                    </Link>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Make Admin</Typography>
                            <AdminPanelSettingsIcon />
                        </Box>
                    </Link>
                    <Link to={`${url}/createservice`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Create Service</Typography>
                            <AddBoxIcon />
                        </Box>
                    </Link>
                </Box>}
                <Link to='/' style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)' }}>
                    <Box onClick={logout} sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mb: 1, boxShadow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>LogOut</Typography>
                        <LogoutIcon />
                    </Box>
                </Link>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' }, ml: 5,
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route exact path={`${path}/myshopping`}>
                        <MyShopping />
                    </Route>
                    <AdminRoute exact path={`${path}/allorders`}>
                        <AllOrders />
                    </AdminRoute>
                    <Route exact path={`${path}/checkout`}>
                        <CheckOut />
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Complete />
                    </Route>
                    <Route exact path={`${path}/paynow`}>
                        <PayNow />
                    </Route>
                    <Route exact path={`${path}/order-complete/:orId`}>
                        <OrderComplete />
                    </Route>
                    <Route path={`${path}/profile`}>
                        <Profile />
                    </Route>
                    <AdminRoute path={`${path}/createservice`}>
                        <CreateService />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
