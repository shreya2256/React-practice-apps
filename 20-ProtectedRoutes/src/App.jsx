import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Navigation from './Components/Navigation'

//npm install react-router-dom
//Folder Structure
// src/
// ├── App.jsx
// ├
// ├── auth.js                    # Auth utility (check login status)
// ├── ProtectedRoute.jsx        # Route guard logic
// ├── components/
// │   └── Navigation.jsx        # Optional navigation bar
// ├── pages/
// │   ├── Home.jsx              # Public page
// │   ├── Login.jsx             # Login page
// │   └── Dashboard.jsx         # Protected page


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;