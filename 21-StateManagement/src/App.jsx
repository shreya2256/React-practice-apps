import { useState } from 'react'
import './App.css'
import { useReducer } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/Navigation";

//import Routes from "./Routes";

// 	State Management
// -	1. useState/useReducer for local state
// -	2. Context API (for medium-scale apps)

//State Management Overview
// | Tool                         | Scope                   | Best For                               |
// | ---------------------------- | ----------------------- | -------------------------------------- |
// | `useState`                   | Local                   | Simple component state                 |
// | `useReducer`                 | Local (complex)         | Complex local state (forms, toggles)   |
// | `Context API`                | App-wide (small/medium) | Auth, theme, language                  |
// | `Redux Toolkit`              | App-wide (large)        | Large apps with strict structure       |
// | `Zustand`, `Jotai`, `Recoil` | App-wide (modern)       | Simpler, lighter alternatives to Redux |

// -	1. useState/useReducer for local state
//  What is useState?
// A React Hook used to declare and manage local component state.
// Syntax:
// const [state, setState] = useState(initialValue);
// Use it when:
// Managing simple local state (like input fields, toggles, counters).
// Logic doesn’t get too complex.


//Example:
//import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
// export default App;

// useReducer – For Complex Local State
//  What is useReducer?
// An alternative to useState, great for managing complex or interrelated state logic, like multiple values, or state that depends on previous state.

// Syntax:
// const [state, dispatch] = useReducer(reducer, initialState);
// Use it when:
// State transitions are more complex.
// You have multiple sub-values in state.
// You want better structure using a reducer pattern (like Redux).

//  Example:
// import { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button 
//       className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => dispatch({ type: "increment" })}>+</button>
//       <br/>
//       <br/>
//       <button 
//       className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => dispatch({ type: "decrement" })}>-</button>
//     </div>
//   );
// }
// export default App;


// useState vs useReducer
// | Feature              | `useState`                      | `useReducer`                   |
// | -------------------- | ------------------------------- | ------------------------------ |
// | Simplicity           | Very simple                     | Slightly complex               |
// | State complexity     | Best for primitive/simple state | Best for complex objects/logic |
// | Logic separation     | Inline                          | Abstracts logic via reducer    |
// | Action-based updates | ❌                               | ✅ via `dispatch(action)`       |

// What is Context API?
// Context API allows you to share state (like user authentication, theme, language, etc.) between components without prop drilling.
// Instead of passing props down through many levels, you define a context provider at a higher level and any child component can access the data via a context consumer or useContext() hook.
// When to Use Context API
// Use it when:
// You need to share global state (like user data, theme, auth status).
// Your app has deeply nested components.
// You want a lightweight alternative to Redux.
// ❌ Don’t use it for:
// Every small piece of state (like toggle states, input values).
// Frequent state updates (can cause performance issues).


//  Context API Example (Step-by-Step)

//Folder Structure
// src/
// ├── components/
// │   └── Navigation.jsx
// ├── context/
// │   └── AuthContext.jsx
// ├── pages/
// │   ├── Home.jsx
// │   ├── About.jsx
// │   └── Dashboard.jsx
// ├── App.jsx
// └── main.jsx

// src/App.jsx


function App() {
  return (
    <AuthProvider>
      <Navigation />
   
    </AuthProvider>
  );
}
export default App;







