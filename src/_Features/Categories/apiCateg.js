
import {backURL} from "../../vars.jsx";
const section = "CTG";

async function AddCateg(formData) {
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

async function GetAllCategs() {
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

async function UpdateCateg(formData) {
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

async function DeleteCateg(id) {
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
    AddCateg,
    GetAllCategs,
    UpdateCateg,
    DeleteCateg,
};
