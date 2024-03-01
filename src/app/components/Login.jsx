import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, InputAdornment, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Img from "../../assets/logo.png";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Paper elevation={5} style={{ padding: 20, width: "100%", maxWidth: 400, backgroundColor: "#f5f5f5"  }}>
            <img src={Img} alt="logo" style={{ width: "100%", marginBottom: 20 }} />
            <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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
                <Button variant="contained" color="primary">Login</Button>
            </form>
        </Paper>
    );
}
