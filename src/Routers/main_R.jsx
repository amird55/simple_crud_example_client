import React from "react";
import {createBrowserRouter} from "react-router";
import AppLayout from "../LayOut/AppLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import CategsPage from "../_Features/Categories/CategsPage.jsx";
import ToDoPage from "../_Features/ToDo/ToDoPage.jsx";

const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/",         element:<HomePage />,     handle: { title: "דף הבית" }},
            {path:"/categ",    element:<CategsPage />,   handle: { title: "קטגוריות" }},
            {path:"/todo",     element:<ToDoPage />,     handle: { title: "משימות" }},
        ]
    },
]);

import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AssignmentIcon from '@mui/icons-material/Assignment';
export const navItems = [
    { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
    { name: 'קטגוריות'    , path: '/categ'    , icon: <CategoryIcon /> },
    { name: 'משימות'    , path: '/todo'    , icon: <AssignmentIcon /> },
];

export default router;

