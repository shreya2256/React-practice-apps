import './App.css'
import { useState, useEffect, useRef } from "react";

//useRef Recap:
// useRef is used for two main things:
// Accessing DOM elements directly (without re-rendering).
// Storing mutable values that persist across renders without causing a re-render.

//Example : Focusing an Input Field
// function App() {
//   const inputRef = useRef();

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <input 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       ref={inputRef} placeholder="Enter text here" />
//       <br/>
//       <br/>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={handleClick}>Focus Input</button>
//     </>
//   );
// }
// export default App;

//Example: Tracking Previous State

// function App() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef();

//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]);

//   return (
//     <>
//       <h1>Current: {count}</h1>
//       <h2>Previous: {prevCountRef.current}</h2>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   );
// }
// export default App;

//Example:Stopwatch using useRef
// function App() {
//   const timerRef = useRef(null);
//   const [seconds, setSeconds] = useState(0);

//   const startTimer = () => {
//     if (!timerRef.current) {
//       timerRef.current = setInterval(() => {
//         setSeconds((s) => s + 1);
//       }, 1000);
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   };

//   const resetTimer = () => {
//     stopTimer();
//     setSeconds(0);
//   };

//   return (
//     <>
//       <h1>{seconds} s</h1>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={startTimer}>Start</button>
//       <br/>
//       <button 
//       className='bg-blue-500 shadow-lg shadow-blue-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={stopTimer}>Stop</button>
//       <br/>
//       <button 
//       className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={resetTimer}>Reset</button>
//     </>
//   );
// }
// export default App;

//Example:Count Clicks Without Causing Re-Renders
// Since we don’t need the UI to re-render on every click, we store count in useRef
//check console in browser for the output
// function App() {
//   const clickCount = useRef(0);

//   const handleClick = () => {
//     clickCount.current += 1;
//     console.log("Clicked", clickCount.current, "times");
//   };

//   return (
//     <>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={handleClick}>Click Me</button>
//       <p>Check console to see clicks</p>
//     </>
//   );
// }
// export default App;

//Example:Avoiding Unwanted useEffect Triggers
// We skip the first render using useRef.

function App() {
  const [input, setInput] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log("Input changed:", input);
  }, [input]);

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}
export default App;





