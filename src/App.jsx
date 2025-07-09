import React, { useState } from 'react';
import './App.css'
import Home from './pages/Home'
import Navbar from "./component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import MainLayout from './pages/MainLayout';


function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout  />,
      children:[
        {
          path:"/",
          element:<Home  />
        },
        {
          path:"/about",
          element:<About  />
        },
        {
          path:"/contact",
          element:<Contact  />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/SignUp",
          element:<Signup  />
        }
      ]
    }
  ])
  


  const [login , setLogin] = useState(true);

  return (
    <RouterProvider  router={appRouter} />
  )
}

export default App
