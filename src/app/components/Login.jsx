import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControlLabel,Checkbox, Paper, InputAdornment, IconButton , Avatar} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Img from "../../assets/logo.png";
import Image from 'next/image';
import { loginUser } from '../utils/auth';
import { loginSuccess } from '../redux/reducers/loginReducer';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';


export default function Login() {

    const [ loginData , setLoginData ] = useState({
        email:"",
        password:""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();


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

    const handleLogin = async(e) => {

        console.log("click")

        e.preventDefault();
        try {

          const loginResponse = await loginUser(loginData);
           console.log(loginResponse.data)
           
           dispatch(loginSuccess(loginResponse.data))
           router.push('/dashboard');
          
           
        }catch (err) {
            console.error('Error logging in user:', err);
            throw err;
        }
    }

    return (
        <Paper elevation={5} style={{ padding: 20, width: "100%", maxWidth: 400, backgroundColor: "#f5f5f5", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', marginBottom: 20 }}>
            <Image src={Img} alt="logo" height={50} width={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
            <TextField
                sx={{ backgroundColor: 'white' }}
                InputProps={{
                    startAdornment: <EmailIcon style={{ marginRight: 8, color: 'gray' }} />,
                }}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
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
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                type={showPassword ? 'text' : 'password'}
                label="Password" variant="outlined" margin="normal"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, alignItems: 'center', width: '100%' }}>
                <FormControlLabel
                    control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} color={rememberMe ? "success" : "default"} />}
                    label="Remember me"
                />

                <span style={{ textDecoration: 'none', cursor: 'pointer', color: 'grey' }}>
                    Forgot password?
                </span>
            </div>

            <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </form>
    </Paper>

    );
}
