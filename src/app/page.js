"use client"
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { Grid, Typography, Box } from "@mui/material";
import Login from "./components/Login";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Register from "./components/Register";
import Img from "../assets/logo.png";
import Image from 'next/image'


export default function Home() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ height: '100vh', width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ backgroundColor: "#CE9539", padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Image src={Img} alt="logo" width={100} height={91} />
          </div>
          <Lottie  style={{height: 605}} animationData={animationData} />
          <Typography variant="subtitle1" style={{ fontFamily: "fantasy", fontWeight: 'bold' }}>
            Welcome to CabZen, your ultimate destination for hassle-free and convenient rides across town, where every journey is a seamless experience tailored to your needs, ensuring comfort, safety, and reliability at every turn.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} style={{ backgroundColor: "#E8EBE6", padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item style={{ width: '100%' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Typography variant="h5" style={{ fontWeight: 600, fontFamily: "cursive", color: '#3B383A', fontSize: '2rem' }}>Cabzen</Typography>
                <Typography variant="caption" style={{ color: 'gray', fontFamily: "cursive" }}>Your Companion</Typography>
              </div>
              <div style={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="Login" />
                  <Tab label="Register" />
                </Tabs>
                <div style={{ marginTop: '20px', width: '100%', display:"flex", justifyContent:"center" }}>
                  {value === 0 && <Login />}
                  {value === 1 && <Register />}
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
