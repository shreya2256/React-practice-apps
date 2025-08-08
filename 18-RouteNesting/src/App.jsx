import { useState } from 'react'
import './App.css'
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./Components/Settings";


// Installation:
// npm install react-router-dom

// Route Nesting (Nested Routing)
// Example Use Case:
// /dashboard (parent)
// /dashboard/profile (child)
// /dashboard/settings (child)

//Folder structure
// src/
// ├── components/
// │   ├── Navigation.jsx          ← Navigation bar (global)
// │   └── Dashboard/
// │       ├── Dashboard.jsx
// │       ├── Profile.jsx
// │       └── Settings.jsx
// ├── App.jsx
// └── main.jsx


function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation /> {/* Always visible */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* You can add routes for Home and About too */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
