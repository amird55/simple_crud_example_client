import React, {useState} from 'react';
import ToDoList from "./ToDoList.jsx";
import ToDoAdd from "./ToDoAdd.jsx";

function ToDoPage(props) {
    const [editData, setEditData] = useState(null);

    return (
        <>
            <ToDoAdd editData={editData} />
            <ToDoList onEdit={setEditData} />
        </>
    );
}

export default ToDoPage;