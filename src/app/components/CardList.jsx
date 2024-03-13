import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { getAllUsers } from '../utils/admin';

const CardList = ({ users, searchQuery, onUserRegistered }) => {
    
    const [updatedUsers, setUpdatedUsers] = useState([]);

    useEffect(() => {
        setUpdatedUsers(users);
    }, [users]);

    const handleUpdateUser = (updatedUser) => {
        const index = updatedUsers.findIndex(user => user.userName === updatedUser.userName);
        if (index !== -1) {
            const newUsers = [...updatedUsers];
            newUsers[index] = updatedUser;
            setUpdatedUsers(newUsers);
        }
    };

    const filteredUsers = updatedUsers.filter(user =>
        user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderUserCards = () => {
        return filteredUsers.map(user => (
            <Grid item key={user.userName} xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card user={user} onUpdate={handleUpdateUser} />
            </Grid>
        ));
    };

    return (
        <div>
            <Grid container spacing={4} justifyContent="flex-start" sx={{ marginTop: 5 }}>
                {renderUserCards()}
            </Grid>
        </div>
    );
}

export default CardList;
