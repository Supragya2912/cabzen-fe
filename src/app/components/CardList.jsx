"use client"
import React, { useState, useEffect, useCallback } from "react"
import { Grid } from "@mui/material"
import { getAllUsers } from "../utils/admin"
import Card from "./Card"

const CardList = ({users}) => {

    console.log(users);

    return (

        <>
            <Grid container spacing={4}  justifyContent="flex-start" sx={{ marginTop: 5 }}>
                {users.map((user, index) => (
                    <Grid item key={index}  xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card user={user} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default CardList