//npm install react-router 

import { useState } from 'react'
import './App.css'

import { RouterProvider} from 'react-router';
import router from "./Routers/main_R";

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
