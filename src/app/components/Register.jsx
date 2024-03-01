import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, InputAdornment, IconButton, MenuItem, Select } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';

import Img from "../../assets/logo.png";


export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <Paper elevation={3} style={{ padding: 20, width: "100%", maxWidth: 400, backgroundColor: "#f5f5f5" }}>
            <img src={Img} alt="logo" style={{ width: "100%", marginBottom: 20 }} />
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <TextField
                sx={{ backgroundColor: 'white' }} 
                    InputProps={{
                        startAdornment: <AccountCircleIcon style={{ marginRight: 8, color: 'gray' }} />,
                    }}
                    label="Full Name" variant="outlined" margin="normal"
                />
                <TextField
                sx={{ backgroundColor: 'white' }} 
                    InputProps={{
                        startAdornment: <EmailIcon style={{ marginRight: 8, color: 'gray' }} />,
                    }}
                    label="Email" variant="outlined" margin="normal"
                />
                <TextField
                sx={{ backgroundColor: 'white' }} 
                    InputProps={{
                        startAdornment: <LockIcon style={{ marginRight: 8, color: 'gray' }} />,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    type={showPassword ? 'text' : 'password'}
                    label="Password" variant="outlined" margin="normal"
                />
                <TextField
                sx={{ backgroundColor: 'white' }} 
                    InputProps={{
                        startAdornment: <PhoneIcon style={{ marginRight: 8, color: 'gray' }} />,
                    }}
                    label="Phone" variant="outlined" margin="normal"
                />
                <Select
                   
                     sx={{ backgroundColor: 'white' }} fullWidth
                    name="role"

                >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="driver">Driver</MenuItem>

                </Select>
                <Button variant="contained" color="primary" >Register</Button>
            </form>
        </Paper>
    );
}
