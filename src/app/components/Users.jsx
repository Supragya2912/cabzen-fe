"use client"
import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './Navbar';
import { Typography, TextField, Grid, IconButton, Modal } from '@mui/material';
import { IoIosPersonAdd } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import CardList from './CardList';
import { useSelector } from 'react-redux';
import Register from './Register';
import { getAllUsers } from '../utils/admin';

const Users = () => {

    const [openRegister, setOpenRegister] = useState(false);
    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    const fetchUserData = useCallback(() => {
        getAllUsers().then((response) => {
            setUsers(response.data)
        }).catch((error) => {
            console.error('Error fetching users:', error);
        })
    }, [])

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleOpenRegister = () => setOpenRegister(true);

    const handleCloseRegister = () => {
        setOpenRegister(false);
        fetchUserData();
    };

    const userData = useSelector((state) => state.loginReducer.user)

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
                            <TextField fullWidth placeholder='Search' value={searchQuery}
                                onChange={handleSearchChange}></TextField>
                            <IconButton onClick={handleOpenRegister} style={{ marginLeft: 5, backgroundColor: '#FFA500', borderRadius: '50%', boxShadow: '0px 0px 5px 0px rgba(255, 165, 0, 0.5)' }}>
                                <IoIosPersonAdd style={{ color: "#fff" }} />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Avatar sx={{ marginRight: 2 }} alt="Avatar" src="/avatar.jpg" />
                    </Grid>
                </Grid>

                <CardList users={users} searchQuery={searchQuery} onUserRegistered={fetchUserData} />

            </div>

            <Modal open={openRegister} onClose={handleCloseRegister} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Register onSuccess={handleCloseRegister} />
                </div>
            </Modal>
        </>
    );
}

export default Users;
