"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Typography, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Dashboard = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div style={{
                height: '100vh',
                backgroundColor: '#EAEAEA',
            }}>
                <Navbar />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent:"center",padding: '0 20px' }}>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center', backgroundColor: "white" }}>
                        <TextField fullWidth placeholder='Search'></TextField>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MdDarkMode style={{ marginRight: 10 }} />
                        <CiDark style={{ marginRight: 10 }} />
                        <Avatar alt="Avatar" src="/avatar.jpg" />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;
