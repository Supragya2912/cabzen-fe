"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Typography, TextField, Grid, IconButton } from '@mui/material';
import { IoIosPersonAdd } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import CardList from './CardList';
import { useSelector } from 'react-redux';

const Users = () => {

    const userData = useSelector((state) => state.loginReducer.user)
    console.log(userData);
    return (
        <>
            <div style={{
                height: '100vh',
                backgroundColor: '#EAEAEA',
            }}>
                <Navbar />

                <Grid container>
                    <Grid item xs={4} sm={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h6'>Users</Typography>
                    </Grid>
                    <Grid item xs={4} sm={8}>
                        <div style={{ display: 'flex' }}>
                            <TextField fullWidth placeholder='Search'></TextField>
                            <IconButton style={{ marginLeft: 5, backgroundColor: '#FFA500', borderRadius: '50%', boxShadow: '0px 0px 5px 0px rgba(255, 165, 0, 0.5)' }}>
                                <IoIosPersonAdd style={{ color: "#fff" }} />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Avatar sx={{ marginRight: 2 }} alt="Avatar" src="/avatar.jpg" />
                    </Grid>
                </Grid>

                {/* Card list of users is to be added here */}
                <CardList />
            </div>
        </>
    );
}

export default Users;
