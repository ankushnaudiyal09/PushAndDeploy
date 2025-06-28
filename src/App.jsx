import React from 'react';
import './App.css'
import Home from './pages/Home'
import Navbar from "./component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';

function App() {


  return (
    <>
        <Navbar />
        <Home />
        <Footer />
    </> 
  )
}

export default App
