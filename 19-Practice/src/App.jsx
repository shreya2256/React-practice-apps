// import { useState } from 'react'
// import './App.css'
// import { useParams } from "react-router-dom";
// import React from 'react'
// import {BrowserRouter, Routes,Route} from 'react-router-dom'
// import User from './Components/User'
// // import Home from './Components/Home'
// import Navigation from './Components/Navigation';
// import Home from './Elements/Home'
// import About from './Elements/About'
// import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Containers/About";
import Home from "./Containers/Home";
import Debug from "./Containers/Debug";
import Navigation from "./Containers/Navigation";


//install this as "npm install react-router-dom"


// React Router (v6+) — Advanced Topics are:
// 1. useParams
// 2. useNavigate (Deep Dive)
// 3. useLocation
// 4. Protected Routes (Route Guarding)

// 1. useParams
// What is useParams?
// useParams() is a hook from react-router-dom used to read route parameters. It returns an object of key/value pairs from the current <Route path>.

//Example:useParams — Access URL Parameters => Extracts route parameters from the URL.

//Example 1:

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/user/:id" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//Example 2:
//for this example use Components Folder

// function App() {
//   return (
//     <BrowserRouter>
//       <Navigation/>
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/user/:username" element={<User />} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// 2.useNavigate in React Router (v6+)
// useNavigate() is a hook from react-router-dom used to navigate programmatically (instead of using <Link>).

// Syntax
/*
const navigate = useNavigate();
navigate("/route");                  // navigates to "/route"
*/

// When to Use useNavigate
// After login/signup → redirect to dashboard.
// After form submission → go to confirmation page.
// After performing some logic → conditionally redirect.

// Additional Features
// navigate("/login", { replace: true });         // replaces history instead of pushing new
// navigate(-1);                                  // go back
// navigate(1);                                   // go forward

//Example 1:
//For this example use Element Folder
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//3.useLocation — Get Current Route Info
//Returns an object with current path, search params, hash, etc.

// useLocation in React Router (v6+)
// The useLocation() hook is used to access the current location object. It gives information about the current URL, including:
// pathname: path of the route
// search: query string (e.g., ?q=hello)
// hash: anchor (e.g., #section1)
// state: custom data passed via navigate()


// import { useLocation } from "react-router-dom";
//This is formal example:
// function Debug() {
//   const location = useLocation();
//   return (
//     <div>
//       <h2>Current Location</h2>
//       <pre>{JSON.stringify(location, null, 2)}</pre>
//     </div>
//   );
// }

//Example 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./Containers/About";
// import Home from "./Containers/Home";
// import Debug from "./Containers/Debug";
// import Navigation from "./Containers/Navigation";

//For this example use Element Containers
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/debug" element={<Debug />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

//Output will be shown as :
//http://localhost:5173/debug
/*
Home |About Debug
{
  "pathname": "/debug",
  "search": "",
  "hash": "",
  "state": null,
  "key": "lxvl4aqx"
}
*/

