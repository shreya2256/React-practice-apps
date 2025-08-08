import './App.css'
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

//1.Controlled vs Uncontrolled Inputs
//2.useRef for Uncontrolled

//1.Controlled vs Uncontrolled Inputs
// Controlled Component
// React controls the input via useState.
//Example
// function ControlledForm() {
//   const [name, setName] = useState("");

//   return (
//     <input className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
//       type="text"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//     />
//   );
// }

// function App() {
//   return (
//     <>
//       <ControlledForm/>
//     </>
//   )
// }

// export default App



// Uncontrolled Component
// Uses ref to directly access DOM value — like vanilla JS.

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input 
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
      type="text" ref={inputRef} />
      <button 
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={handleSubmit}>Submit</button>
    </>
  );
}
//Simpler, but limited flexibility.

function App() {
  return (
    <>
     <UncontrolledForm/> 
    </>
  )
}

export default App

// useRef in Uncontrolled Forms
//1. Stores reference to the DOM
// 2.Skips state & re-render

// Example:
// const emailRef = useRef();
// <input ref={emailRef} type="email" placeholder="Enter email" />

// You can use this in login forms or search bars when you don't need to validate input on every keystroke.










