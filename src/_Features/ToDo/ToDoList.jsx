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
import {useGetToDos, useDeleteToDo} from "./apiHooksToDo.js";
import {useGetCategs} from "../Categories/apiHooksCateg.js";
import { useConfirm } from 'material-ui-confirm';
import { createDeleteConfirmConfig } from '../../utils/confirmDialogUtils.jsx';

function ToDoList({onEdit}) {
    const {isDeleting, deleteToDo} = useDeleteToDo();
    const {data: {data_by_id: categsData} = {}} = useGetCategs();
    const confirm = useConfirm();

    const handleDeleteClick = async (id, name) => {
        const config = createDeleteConfirmConfig('המשימה:', name);
        const { confirmed, reason } = await confirm(config)
        if (confirmed) {
            deleteToDo(id);
        }
    };

    const {  data: { list: todos } = {}, isLoading, isError, error} = useGetToDos();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    if (!todos || todos.length === 0) {
        return (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
                עדיין אין משימות
            </Typography>
        );
    }

    return (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="todos table">
                <TableHead>
                    <TableRow>
                        <TableCell>שם המשימה</TableCell>
                        <TableCell>קטגוריה</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((row) => {
                        const categoryName = categsData && categsData[row.categ_id]
                            ? categsData[row.categ_id]
                            : ' - ';

                        return (
                            <TableRow
                                key={`${row.id}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell>
                                    {categoryName}
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

export default ToDoList;