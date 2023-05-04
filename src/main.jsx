import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import SingUp from './Components/SingUp/SingUp.jsx';
import AuthProviders from './Components/AuthProvider/AuthProviders.jsx';
import Dish from './Components/Cover/Dish.jsx';
import PrivetRout from './Components/PrivetRout/PrivetRout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"singUp",
        element:<SingUp></SingUp>
      },
      {path:"dish",
      element:<PrivetRout><Dish></Dish></PrivetRout>
    }
    ]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProviders>
       <RouterProvider router={router} />
       </AuthProviders>
  </React.StrictMode>,
)
