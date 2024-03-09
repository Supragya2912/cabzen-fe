"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TbBrand4Chan } from "react-icons/tb";
import { ImUsers } from "react-icons/im";
import { IoMdCar } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { useRouter } from 'next/navigation';



export default function TemporaryDrawer() {

    const [open, setOpen] = useState(false);
    const router = useRouter();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, backgroundColor: "#23252D", height: "100vh" }} role="presentation" onClick={toggleDrawer(false)}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', backgroundColor: 'black' }}>
                <div style={{ color: 'white', fontSize: '24px' }}>ＣＡＢＺＥＮ</div>
            </div>

            <List>
                {['Dashboard', 'Users', 'Cabs', 'Brands', 'Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ '&:hover': { border: '1px solid orange' } }} 
                           onClick={() => {
                            if (index === 0) {
                                router.push('/dashboard');
                            } else if (index === 1) {
                                router.push('/users');
                            } else if (index === 2) {
                                router.push('/cabs');
                            } else if (index === 3) {
                                router.push('/brands');
                            } else if (index === 4) {
                                router.push('/settings');
                            }
                           }}
                        >
                            <ListItemIcon>
                                {
                                    index === 0 ? <MdDashboard style={{ color: "orange" }} /> :
                                        index === 2 ? <IoMdCar style={{ color: "orange" }} /> :
                                            index === 1 ? <ImUsers style={{ color: "orange" }} /> :
                                                index === 3 ? <TbBrand4Chan style={{ color: "orange" }} /> :
                                                    index === 4 ? <IoSettings style={{ color: "orange" }} /> :
                                                        null
                                }
                            </ListItemIcon>
                            <ListItemText sx={{ color: "white" }} primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><FiAlignJustify size={30} style={{ color: "orange" }} /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
