import { useState } from 'react'
import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'
import { Component } from 'react'


// React Router (v6+)
// We'll cover:
//  Basics of Routing (Setup, <BrowserRouter>, <Route>, <Link>)
//  Route Nesting (Layout Routes, Outlet, Index routes)

// 1. React Router Basics
// Installation:
// npm install react-router-dom => in terminal

//Example 1:


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    <Navbar/>
    </BrowserRouter>
  )
}

export default App
