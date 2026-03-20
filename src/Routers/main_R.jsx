import React from "react";
import {createBrowserRouter} from "react-router";
import AppLayout from "../LayOut/AppLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";

const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/",    element:<HomePage />,   handle: { title: "דף הבית" }},
        ]
    },
]);

import HomeIcon from '@mui/icons-material/Home';
export const navItems = [
    { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
];

export default router;

