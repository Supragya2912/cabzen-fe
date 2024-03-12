import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, InputAdornment, IconButton, MenuItem, Select } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { registerUser } from '../utils/auth';
import Img from "../../assets/logo.png";

export default function Register({onSuccess}) {


    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        userName:'',
        email: '',
        password: '',
        phone: '',
        role: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            onSuccess();
            console.log("xxxx");
            setFormData();
           
        } catch (error) {
            
            alert('Registration failed. Please try again.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Paper elevation={3} style={{ padding: 20, width: "100%", maxWidth: 400, backgroundColor: "#f5f5f5", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', marginBottom: 20 }}>
            <Image src={Img} alt="logo" height={50} width={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <TextField
                    sx={{ backgroundColor: 'white' }}
                    InputProps={{
                        startAdornment: <AccountCircleIcon style={{ marginRight: 8, color: 'gray' }} />,
                    }}
                    label="Full Name" variant="outlined" margin="normal"
                    name="fullName"
                    value={formData
                        ?.fullName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    sx={{ backgroundColor: 'white' }}
                    InputProps={{
                        startAdornment: <AccountCircleIcon style={{ marginRight: 8, color: 'gray' }} />
                    }}
                    label="User Name" variant="outlined" margin="normal"
                    name="userName"
                    value={formData?.userName}
                    onChange={handleChange}
                    required
                />
                
                <TextField
                    sx={{ backgroundColor: 'white' }}
                    InputProps={{
                        startAdornment: <EmailIcon style={{ marginRight: 8, color: 'gray' }} />,
                    }}
                    label="Email" variant="outlined" margin="normal"
                    name="email"
                    type="email"
                    value={formData?.email}
                    onChange={handleChange}
                    required
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
                    name="password"
                    value={formData?.password}
                    onChange={handleChange}
                    required
                />
                <TextField
                    sx={{ backgroundColor: 'white' }}
                    InputProps={{
                        startAdornment: <PhoneIcon style={{ marginRight: 8, color: 'gray' }} />,
                    }}
                    label="Phone" variant="outlined" margin="normal"
                    name="phone"
                    type="tel"
                    value={formData?.phone}
                    onChange={handleChange}
                    required
                />
                <Select
                    sx={{ backgroundColor: 'white' }}
                    fullWidth
                    label="Role"
                    name="role"
                    value={formData?.role}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="driver">Driver</MenuItem>
                </Select>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
            </form>
        </Paper>
    );
}
