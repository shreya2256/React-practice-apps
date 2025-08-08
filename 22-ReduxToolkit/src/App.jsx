import { useState } from 'react'
import './App.css'
import React from 'react';
import Counter from './features/counter/Counter';

// What is Redux Toolkit?
// Redux Toolkit is a set of tools that makes writing Redux logic:
// Easier
// Less boilerplate
// More efficient
// Better structured
// It's built on top of Redux and follows best practices by default.

// Install Redux Toolkit:
// npm install @reduxjs/toolkit react-redux


// When to Use Redux Toolkit?
// Use it when:
// You have global state across many components (auth, cart, products, etc.)
// Your app is medium to large-scale
// You want centralized, predictable state management
// ❌ Avoid it when:
// Your app is small with only local state — then use useState or useReducer.


//  Redux Toolkit Key Concepts
// | Concept                                  | Purpose                                          |
// | ---------------------------------------- | ------------------------------------------------ |
// | `configureStore()`                       | Sets up the Redux store with default middlewares |
// | `createSlice()`                          | Defines reducer + actions together               |
// | `createAsyncThunk()`                     | Handles async logic (like API calls)             |
// | `Provider` + `useSelector`/`useDispatch` | Connects React to Redux                          |

//Example:
// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   └── counter/
// │       ├── counterSlice.js
// │       └── Counter.jsx
// ├── App.jsx
// └── main.jsx



function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

//to check how it runs at back , check "Output folder=>image"









