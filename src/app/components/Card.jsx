import React, { useState } from "react";
import { Typography, IconButton, Modal, TextField, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { updateUser, getAllUsers } from '../utils/admin';

const Card = ({ user, onUpdate }) => {

    const { fullName, email, phone, userName } = user;
    const [openDialog, setOpenDialog] = useState(false);
    const [editData, setEditData] = useState({ fullName, email, phone });

    const handleEditForm = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({
            ...prevData,
            userName: userName,
            [name]: value
        }));
    }

    const handleSubmit = async () => {

        try {
            await updateUser(editData);
            setOpenDialog(false);
            onUpdate(editData);

        } catch (error) {

            console.error('Error updating user:', error);

        }
    };

    return (
        <>

        
            <div style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                boxShadow: '0px 0px 10px 0px rgba(255, 165, 0, 0.3)',
                width: '70%',
                maxWidth: 600,
                position: 'relative'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: { xs: '1.0rem', sm: '2rem' } }}>{fullName}</Typography>
                    <IconButton aria-label="edit" onClick={handleEditForm}>
                        <EditIcon />
                    </IconButton>
                </div>
                <div>
                    <Typography variant="subtitle2" style={{ color: 'gray', marginBottom: 5 }} sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Username: {userName}</Typography>
                    <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Email: {email}</Typography>
                    <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>Phone: {phone}</Typography>
                </div>
            </div>

            <Modal open={openDialog} onClose={handleCloseDialog}>
                <div style={{  backgroundColor: '#EAEAEA', padding: 20, borderRadius: 10, maxWidth: 400, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }}>
                    <Typography variant="h6" gutterBottom style={{ marginBottom: 20, fontWeight:"bold" }}>Edit User</Typography>
                    <TextField name="fullName" label="Full Name" value={editData.fullName} onChange={handleChange} fullWidth style={{ marginBottom: 10 }} />
                    <TextField name="email" label="Email" value={editData.email} onChange={handleChange} fullWidth style={{ marginBottom: 10 }} />
                    <TextField name="phone" label="Phone" value={editData.phone} onChange={handleChange} fullWidth style={{ marginBottom: 20 }} />
                    <div style={{ display: 'flex' }}>
                        <Button variant="contained" style={{ backgroundColor: "orange", width: '50%' }} onClick={handleSubmit}>Update</Button>
                        <Button variant="contained" onClick={handleCloseDialog} color="error" style={{ width: '50%', marginLeft: 10 }}>Cancel</Button>
                    </div>
                </div>
            </Modal>


        </>
    );
}

export default Card;
