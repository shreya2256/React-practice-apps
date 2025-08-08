import { useState } from 'react'
import './App.css'
import React from 'react';
import { useStore } from './App/store';


// Alternatives: Zustand / Recoil / Jotai
// These libraries simplify global state without boilerplate.


//Zustand
// Zustand (Bear-themed, minimal global state)
// Setup:
// npm install zustand  => in terminal


function App() {
  const { count, increment } = useStore();

  return (
    <div>
      <h1>Zustand Counter: {count}</h1>
      <button 
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
