import { useState } from 'react'
import React from 'react'
import './App.css'
import InputA from './Components/inputA'
import InputB from './Components/inputB'

// What is Lifting State Up?
// When two or more child components need to share data, you "lift" the state up to their closest common ancestor, then pass it down as props.
//  Why Lift State Up?
// Avoid duplicate states across components
// Enable sibling communication
// Keep data in one place for consistency
// Real-Life Analogy
// Imagine two kids (components) sharing a toy box (state). Instead of each kid managing their own toy list, the parent (common ancestor) manages the toys and distributes them.

// Example: Two Inputs Sharing a Common State
// Parent Component (State lifted up here)

function App() {
  const [text, setText] = useState('')
  return (
    <>
      <div className='p-4 space-y-4'>
        <h2 className='text-xl font-bold'>Lifting State Up</h2>
        <InputA text ={text} setText={setText}/>
        <InputB text={text} setText={setText}/>
      </div>
    </>
  )
}

export default App
