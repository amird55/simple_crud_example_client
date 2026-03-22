import React, {useEffect, useState} from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Box,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useAddCateg, useUpdateCateg} from "./apiHooksCateg.js";

function CategAdd({editData = null}) {
    const {isAdding, addCateg} = useAddCateg();
    const {isUpdating, updateCateg} = useUpdateCateg();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        id:-1,
        name: '',
        diagTitle:"הוספת קטגוריה",
    });
    
    const cleanForm = () => {
        setFormData({
            id:-1,
            name: '',
            diagTitle:"הוספת קטגוריה",
        });
    };
    useEffect(() => {
        if (editData) {
            setFormData({
                ...editData,
                diagTitle:"עריכת הקטגוריה",
            });
            setOpen(true);
        }
        else { cleanForm();}
    }, [editData]);
    
    
    const openNew = () => {cleanForm(); handleOpen();}
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Convert dayjs objects to HH:mm format strings
        const submitData = {
            ...formData,
        };
        
        if(formData.id > 0) {
            updateCateg(submitData);
        } else {
            addCateg(submitData);
        }
        handleClose();
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleTimeChange = (name) => (newValue) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: newValue
        }));
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={openNew} startIcon={<AddIcon />} >
                <Typography sx={{pr:2}} >
                    הוספת קטגוריה
                </Typography>
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ textAlign: 'center' }}>{formData.diagTitle}</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                name="name"
                                label="שם הקטגוריה"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>ביטול</Button>
                        <Button type="submit" variant="contained" color="primary" disabled={isAdding||isUpdating}>
                            שמור
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}

export default CategAdd;