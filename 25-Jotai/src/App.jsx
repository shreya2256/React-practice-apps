import './App.css'
import React from 'react';
import { atom, useAtom } from 'jotai';


// Install:
// npm install jotai

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <h1>Jotai Counter: {count}</h1>
      <button 
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;

