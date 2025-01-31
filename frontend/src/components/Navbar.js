import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                {!user && <Toolbar variant="dense" style={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" color="inherit" component="div">
                        <span onClick={() => navigate('/login')} style={{ marginRight: '20px' }}>Login</span>
                        <span onClick={() => navigate('/register')}>Register</span>
                    </Typography>
                </Toolbar>}
                {user && <Toolbar variant="dense" style={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" color="inherit" component="div">
                        <span style={{ marginRight: '20px' }} onClick={() => navigate('/')}>Products</span>
                        <span onClick={() => navigate('/cart')}>Cart</span>
                    </Typography>
                    <Typography onClick={logout} variant="h6" color="inherit" component="div">
                        Sign Out
                    </Typography>
                </Toolbar>}
            </AppBar>
        </Box>
    );
};

export default Navbar;
