import React from "react";
import {createBrowserRouter} from "react-router";
import AppLayout from "../LayOut/AppLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";

const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/",              element:<HomePage />,       handle: { title: "דף הבית" }},
        ]
    },
]);

import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TodayIcon from '@mui/icons-material/Today';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MedicationIcon from '@mui/icons-material/Medication';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
export const navItems = [
    { name: 'ראשי'          , path: '/'           , icon: <HomeIcon /> },
];

export default router;

