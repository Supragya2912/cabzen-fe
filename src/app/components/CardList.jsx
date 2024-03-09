"use client"
import React, { useState, useEffect, useCallback } from "react"
import { Grid } from "@mui/material"
import { getAllUsers } from "../utils/admin"
import Card from "./Card"

const CardList = () => {

    const [users, setUsers] = useState([])

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

    console.log(users);

    return (

        <>
            <Grid container spacing={4} justifyContent="center" alignContent="flex-start" sx={{ marginTop: 5 }}>
                {users.map((user, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card user={user} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default CardList