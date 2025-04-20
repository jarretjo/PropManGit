import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import Addblock from "./pages/Addblock.jsx";
import Addflat from "./pages/Addflat.jsx";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import { Outlet } from 'react-router-dom';

//const root = document.getElementById("root");
const router = ([{
  path:'/',
  element: <App />, 
  errorElement: <NotFoundPage />,
  children: [
    {
      index: true,
      element: <div>Home Page</div>,
    },
    {  
      path:'/addblock',
      element: <Addblock />
    },
    {  
      path:'/addflat',
      element: <Addflat /> 
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  /* JJ: This is done for safety. It should be removed going into PROD */ 
  <React.StrictMode>
   { /*  <RouterProvider router={router} /> */ }
   <App />
  </React.StrictMode>
);
