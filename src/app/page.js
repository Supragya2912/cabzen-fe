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


export default function Home() {


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <>
      <Grid container style={{ height: "100vh" }} spacing={2}>
        <Grid item xs={6} style={{ backgroundColor: "#CE9539" }}>
          <img src={Img} alt="logo" style={{ width: "100%", marginBottom: 20 }} />
          <Lottie animationData={animationData} />
          <Typography variant="subtitle" style={{ fontFamily: "fantasy", fontWeight: 'bold' }}>Welcome to CabZen, your ultimate destination for hassle-free and convenient rides across town, where every journey is a seamless experience tailored to your needs, ensuring comfort, safety, and reliability at every turn.</Typography>
        </Grid>

        <Grid item xs={6} style={{ position: 'relative', backgroundColor: "#E8EBE6", display: 'flex' }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <div style={{ position: 'relative' , textAlign: 'center'}}>
                <Typography variant="h5" style={{ fontWeight: 600, fontFamily: "cursive", color: '#3B383A', fontSize: 50 }}>Cabzen</Typography>
                <Typography variant="caption" style={{ color: 'gray', marginBottom: 20, fontFamily: "cursive" }}>Your Companion</Typography>
              </div>
              <div style={{ marginTop: 10, height: 300}}> {/* Set a fixed height for the container */}
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="Login" />
                  <Tab label="Register" />
                </Tabs>
                <div style={{ height: "100%", marginTop: 50 }}> {/* Add overflow-y:auto to enable scrolling */}
                {value === 0 && <Login />}
                  {value === 1 && <Register />}
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}