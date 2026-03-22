
import React, {useState} from 'react';
import CategList from "./CategList.jsx";
import CategAdd from "./CategAdd.jsx";

function CategsPage(props) {
    const [editData, setEditData] = useState(null);

    return (
        <>
            <CategAdd editData={editData} />
            <CategList onEdit={setEditData} />
        </>
    );
}

export default CategsPage;