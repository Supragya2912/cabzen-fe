import { Typography } from "@mui/material";
import React from "react";

const Card = ({ user }) => {
    const { fullName, email, phone, userName } = user;

    return (
        <div style={{ 
            backgroundColor: 'white', 
            padding: 20, 
            borderRadius: 10, 
            boxShadow: '0px 0px 10px 0px rgba(255, 165, 0, 0.3)', 
            width: '70%',
            maxWidth: 600
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: { xs: '1.0rem', sm: '2rem' } }}>{fullName}</Typography>
                <div>
                    <Typography variant="subtitle2" style={{ color: 'gray', marginBottom: 5 }} sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Username : {userName}</Typography>
                </div>
                <div>
                    <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Email: {email}</Typography>
                    <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Phone: {phone}</Typography>
                </div>
            </div>
        </div>
    );
}

export default Card;
