
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Homepage from "./pages/Homepage/Homepage";
import Home from "./pages/Home";

import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />}/>
      </Route>
      <Route path="homepage" element={<Homepage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App


  
