"use client"
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const userData = useSelector((state) => state.loginReducer)
    console.log(userData);
    return (
        <AppBar position="static" style={{ backgroundColor: "orange" }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" style={{ color: 'white' }}>
                    CabZen
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit">
                            <PeopleAltIcon />
                        </IconButton>
                        <Typography variant="body1" style={{ color: 'white', marginRight: '10px' }}>Users</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit">
                            <WorkIcon />
                        </IconButton>
                        <Typography variant="body1" style={{ color: 'white', marginRight: '10px' }}>Brands</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit">
                            <LocalTaxiIcon />
                        </IconButton>
                        <Typography variant="body1" style={{ color: 'white', marginRight: '10px' }}>Cabs</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit">
                            <SettingsIcon />
                        </IconButton>
                        <Typography variant="body1" style={{ color: 'white', marginRight: '10px' }}>Settings</Typography>
                    </div>
                </div>
                <Avatar />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
