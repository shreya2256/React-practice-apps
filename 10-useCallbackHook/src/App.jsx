import { useCallback, useState } from 'react'
import { memo } from 'react';
import React from 'react';
import './App.css'
import { useEffect } from 'react';

//useCallback — Optimizing Function References in React
//useCallback is a React Hook that returns a memoized version of a callback function, which only changes if one of its dependencies has changed.
//  It is useful when passing callbacks to child components that rely on reference equality to avoid unnecessary renders.
//Syntax:
// const memoizedCallback = useCallback( () => {
//     //your logic
//  },[dependencies])
// When to Use?
// You are passing a function to a child component that is memoized using React.memo.
// You want to avoid re-creating the same function on every render (which can cause unnecessary re-renders in children).
// useCallback() is a React Hook, and it must be used inside a functional component (or another hook like useEffect, useMemo, etc.).
// In your current code, handleClick is defined outside the App component, which is not allowed for Hooks.

//Example:
// function App(){
//   const handleClick = useCallback(() => {
//   console.log("Clicked!");
//   }, []);

//   return(
//     <>
//     <button 
//     className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//     onClick={handleClick}>Click me</button>
//     </>
//   )
// }
// export default App;

//Example : With React.memo + useCallback:
//Without useCallback, the child would re-render every time the parent renders — even if nothing changed!

// const Child = React.memo(({ onClick }) => {
//   console.log("Child Rendered");
//   return <button 
//   className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//   onClick={onClick}>Click Me</button>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []);

//   return (
//     <>
//       <Child onClick={handleClick} />
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Parent Re-render</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// export default App

//Example:
// function Button({ handleClick, label }) {
//   console.log(`Rendering ${label}`);
//   return <button 
//   className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//   onClick={handleClick}>{label}</button>;
// }

// const MemoizedButton = React.memo(Button);

// function App() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState(0);

//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   const changeValue = () => setValue((prev) => prev + 1);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <MemoizedButton handleClick={increment} label="Increment Count" />
//       <MemoizedButton handleClick={changeValue} label="Change Value" />
//     </div>
//   );
// }

// export default App;

// Output in Console
// Rendering Increment Count
// Rendering Change Value
// When you click "Change Value", only "Change Value" re-renders
// When you click "Increment Count", only that button re-renders

//Example:Preventing Unnecessary Re-renders (Child Components)
//Most asked scenario – Pass stable function reference to a memoized child.

// const Child = React.memo(({ onClick }) => {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Click Child</button>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Child button clicked");
//   }, []); //  Memoized to avoid re-rendering Child

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Increment</button>
//       <Child onClick={handleClick} />
//     </>
//   );
// }

// export default Parent;
// // Why it’s asked: Interviewers want to test if you know how to optimize child re-renders using React.memo() and useCallback.

//Example:useCallback with Dependencies

// function App() {
//   const [value, setValue] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log(`Value is: ${value}`);
//   }, [value]); // Updates only when 'value' changes

//   return (
//     <>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setValue(value + 1)}>Increment</button>
//       <br/>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={handleClick}>Log Value</button>
//     </>
//   );
// }

// export default App;
//Why it’s asked:To check if you understand how dependencies affect useCallback memoization.

//output will be as :
//1stly click on "Log Value" then in console "value is : 0" will be shown
// 2ndly click on "Increment" then again click on "Log Value" the valued in change to "value is : 1" in console
//if we directly click on "Log in" for  2 to 3 times , the specific value is  not incremented but call no. of times upto which we hit click button

//useCallback vs useMemo ::Often asked: When to use useCallback vs useMemo?
// useCallback returns a memoized FUNCTION
//const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);

// useMemo returns a memoized VALUE
//const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

//Interview Tip:
// Use useMemo when you want to cache a result.
// Use useCallback when you want to cache a function.

// Example : Debounce Example with useCallback

// function App() {
//   const [text, setText] = useState('');

//   const handleChange = useCallback((e) => {
//     const debounce = setTimeout(() => {
//       console.log("API call for:", e.target.value);
//     }, 500);

//     return () => clearTimeout(debounce);
//   }, []);

//   return (
//     <input
//     className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       type="text"
//       value={text}
//       onChange={(e) => {
//         setText(e.target.value);
//         handleChange(e);
//       }}
//     />
//   );
// }
// export default App; //Why it’s asked:To check if you understand how dependencies affect useCallback memo
 //Why it’s asked: To see if you understand function identity and debouncing with hooks.
//check output in console


// Example:Using useCallback with event listeners
useEffect(() => {
  const handleKey = (e) => {
    if (e.key === 'Escape') {
      console.log('Escape pressed!');
    }
  };

  window.addEventListener('keydown', handleKey);

  return () => window.removeEventListener('keydown', handleKey);
}, []);


// Fix:
const handleKey = useCallback((e) => {
  if (e.key === 'Escape') {
    console.log('Escape pressed!');
  }
}, []);

useEffect(() => {
  window.addEventListener('keydown', handleKey);
  return () => window.removeEventListener('keydown', handleKey);
}, [handleKey]);

// Interview Notes:
// Concept	           =>Expected Answer
// useCallback	       =>Memoizes a function to avoid re-creation on each render
// When to use	       =>When passing functions to memoized children or dependencies
// Common Pitfall	     =>Using it without dependencies or using it outside a component
// Similarity	         =>useCallback(fn, deps) is same as useMemo(() => fn, deps)




















