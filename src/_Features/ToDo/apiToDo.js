
import {backURL} from "../../vars.jsx";
const section = "TD";

async function AddToDo(formData) {
    let url=`${backURL}/${section}/Add`;
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: strToSend,
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function GetAllToDos() {
    let url=`${backURL}/${section}/List`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function UpdateToDo(formData) {
    let url=`${backURL}/${section}/Update/${formData.id}`;
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: strToSend,
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function DeleteToDo(id) {
    let url=`${backURL}/${section}/Delete`;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id }),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

export {
    AddToDo,
    GetAllToDos,
    UpdateToDo,
    DeleteToDo,
};
