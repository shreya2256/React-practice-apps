import { useState } from 'react'
import './App.css'
import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";


// performance optimization in React using:
// React.memo – Prevents unnecessary re-renders of components.
// useMemo – Memoizes expensive computed values.
// useCallback – Memoizes callback functions to prevent re-creations.

//1.React.memo
//Used for: Wrapping functional components to avoid re-rendering unless props change.
// Child doesn't re-render on count change because its props haven't changed.
// const Child = React.memo(({ name }) => {
//   console.log("Child rendered");
//   return <h2>Hello, {name}</h2>;
// });

// function App() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <>
//       <Child name="Shreya" />
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Increment {count}</button>
//     </>
//   );
// }

// export default App;

//2.useMemo
//Used for: Caching expensive calculations based on dependencies.
//Expensive computation only runs when count changes, not when otherState toggles.
//Example:
// function App() {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(false);

//   const expensiveCalc = (num) => {
//     console.log("Calculating...");
//     let result = 0;
//     for (let i = 0; i < 1e8; i++) {
//       result += num;
//     }
//     return result;
//   };

//   const memoizedValue = useMemo(() => expensiveCalc(count), [count]);

//   return (
//     <>
//       <h2>Expensive Result: {memoizedValue}</h2>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Increment Count</button>
//       <br/>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setOtherState(!otherState)}>Toggle</button>
//     </>
//   );
// }

// export default App;
// //for output , check console once


//3.useCallback
//Used for: Caching function references so child components don’t unnecessarily re-render.
//Child won't re-render when count updates, because handleClick reference is stable.
//Example:

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button 
  className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
  onClick={onClick}>Click Child Button</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />
      <button 
      className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => setCount(count + 1)}>Parent Count: {count}</button>
    </>
  );
}

export default App;
