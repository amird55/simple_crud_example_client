
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
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useAddToDo, useUpdateToDo} from "./apiHooksToDo.js";
import {useGetCategs} from "../Categories/apiHooksCateg.js";

function ToDoAdd({editData = null}) {
    const {isAdding, addToDo} = useAddToDo();
    const {isUpdating, updateToDo} = useUpdateToDo();
    const {data: {list: categsData} = {}, isLoading: isLoadingCategs} = useGetCategs();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: -1,
        title: '',
        categ_id: '',
        diagTitle: "הוספת משימה",
    });

    const cleanForm = () => {
        setFormData({
            id: -1,
            title: '',
            categ_id: '',
            diagTitle: "הוספת משימה",
        });
    };

    useEffect(() => {
        if (editData) {
            setFormData({
                ...editData,
                diagTitle: "עריכת המשימה",
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

        const submitData = {
            ...formData,
        };

        if(formData.id > 0) {
            updateToDo(submitData);
        } else {
            addToDo(submitData);
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

    if (isLoadingCategs) return <p>Loading categories...</p>;

    return (
        <>
            <Button variant="contained" color="primary" onClick={openNew} startIcon={<AddIcon />} >
                <Typography sx={{pr:2}} >
                    הוספת משימה
                </Typography>
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ textAlign: 'center' }}>{formData.diagTitle}</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                name="title"
                                label="שם המשימה"
                                value={formData.title}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <FormControl fullWidth required>
                                <InputLabel>קטגוריה</InputLabel>
                                <Select
                                    name="categ_id"
                                    value={formData.categ_id}
                                    onChange={handleChange}
                                    label="קטגוריה"
                                >
                                    {categsData && categsData.map((categ) => (
                                        <MenuItem key={categ.id} value={categ.id}>
                                            {categ.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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

export default ToDoAdd;
