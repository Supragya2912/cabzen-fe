import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControlLabel,Checkbox, Paper, InputAdornment, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Img from "../../assets/logo.png";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('rememberedEmail');
        const storedRememberMe = localStorage.getItem('rememberMe');

        if (storedRememberMe === 'true' && storedEmail) {
            setEmail(storedEmail);
            setRememberMe(true);
        }
    }, []);

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };


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
               <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, alignItems: 'center', width: '100%' }}>
                    <FormControlLabel
                        control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} color={rememberMe ? "success" : "default"}/>}
                        label="Remember me"
                    />

                        <span style={{ textDecoration: 'none', cursor: 'pointer', color: 'grey' }}>
                            Forgot password?
                        </span>
                    </div>

                <Button variant="contained" color="primary">Login</Button>
            </form>
        </Paper>
    );
}
