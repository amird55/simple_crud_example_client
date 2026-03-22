import React from "react";
import {createBrowserRouter} from "react-router";
import AppLayout from "../LayOut/AppLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import CategsPage from "../_Features/Categories/CategsPage.jsx";

const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/",         element:<HomePage />,     handle: { title: "דף הבית" }},
            {path:"/categ",    element:<CategsPage />,   handle: { title: "קטגוריות" }},
        ]
    },
]);

import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
export const navItems = [
    { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
    { name: 'קטגוריות'    , path: '/categ'    , icon: <CategoryIcon /> },
];

export default router;

