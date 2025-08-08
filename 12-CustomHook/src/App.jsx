import { useState } from 'react'
import {  useEffect } from "react";
import './App.css'

// What is a Custom Hook?
// A custom hook is just a JavaScript function that uses built-in React hooks (useState, useEffect, etc.) to reuse stateful logic between components.

// Why Use Custom Hooks?
// Reusability
// Cleaner Code
// Separation of Concerns
// Share logic without duplication

// Basic Structure of a Custom Hook
// function useCustomHook() {
//   // useState, useEffect, etc.
//   return something;
// }
//  Naming Rule: All custom hooks must start with use (like useFetch, useTimer, etc.)

//Example 1: useWindowWidth Hook
//Tracks browser window width across components.

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return width;
// }

// function App() {
//   const width = useWindowWidth();
//   return <p>Window Width: {width}px</p>;
// }
// export default App;
//above function directly feteches window width
//as for e.g
// Window Width: 852px
//Window Width: 1698px

//Example 2: useFetch Hook (for API Calls)

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       });
//   }, [url]);

//   return { data, loading };
// }
// //Usage:

// function App() {
//   const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

//   if (loading) return <p>Loading...</p>;
//   return <pre>{JSON.stringify(data, null, 2)}</pre>;

// }

// export default App

//Example 3: useToggle

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

function App() {
  const [isOpen, toggleOpen] = useToggle();
  return (
    <>
      <button 
      className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={toggleOpen}>{isOpen ? "Hide" : "Show"}</button>
    </>
  )
}

export default App

// When to Create a Custom Hook
// You should create a custom hook when:
// You use the same useState/useEffect logic in multiple places.
// You want to extract side effects (e.g., resize, local storage).
// You're building reusable components (like modals, timers, toggles).

// Custom Hooks vs Components
// Feature	            || Custom Hook	 ||Component
// Returns	            ||Data/functions ||	JSX (UI)
// Starts with use	    ||   Yes	       || No
// Reusable logic	      ||   Yes         ||	No(unless abstracted)
// Can use other hooks?	||   Yes	       ||Yes