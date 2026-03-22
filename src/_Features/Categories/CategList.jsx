
import React from 'react';
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {useGetCategs, useDeleteCateg} from "./apiHooksCateg.js";
import { useConfirm } from 'material-ui-confirm';
import { createDeleteConfirmConfig } from '../../utils/confirmDialogUtils.jsx';

function CategList({onEdit}) {
    const {isDeleting, deleteCateg} = useDeleteCateg();
    const confirm = useConfirm();

    const handleDeleteClick = async (id, name) => {
        const config = createDeleteConfirmConfig('הקטגוריה:', name);
        const { confirmed, reason } = await confirm(config)
        if (confirmed) {
            deleteCateg(id);
        }
    };

    const {  data: { list: categs } = {}, isLoading, isError, error} = useGetCategs();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    if (!categs || categs.length === 0) {
        return (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
                עדיין אין קטגוריות
            </Typography>
        );
    }

    return (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="categs table">
                <TableHead>
                    <TableRow>
                        <TableCell>שם</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categs.map((row) => {
                        return (
                            <TableRow
                                key={`${row.id}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        onClick={() => onEdit(row)}
                                        color="primary"
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => handleDeleteClick(row.id, row.name)}
                                        disabled={isDeleting}
                                        color="danger"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CategList;