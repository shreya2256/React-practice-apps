import { useState } from 'react'
import './App.css'
import React from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";

// Recoil (Facebook's state management with atoms/selectors)
// Setup:
// npm install recoil


// import React from 'react';
// import { RecoilRoot, atom, useRecoilState } from 'recoil';

// App.jsx

const counterState = atom({
  key: "counter",
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <h1>Recoil Example</h1>
      <Counter />
    </RecoilRoot>
  );
}

export default App;

//to run above code ensure that , this willl follow
// (Recommended): Downgrade to React 18
// To avoid such unstable issues, downgrade your React and React DOM versions to the latest stable React 18:
// Run this command:
// npm install react@18 react-dom@18
// This will fix the error, and your state management libraries like Recoil, Redux Toolkit, Zustand, etc., will work properly.

// After Downgrading
// Your corrected package.json dependencies section will look like:

// json
// Copy code
// "dependencies": {
//   "@tailwindcss/vite": "^4.1.11",
//   "react": "^18.2.0",
//   "react-dom": "^18.2.0",
//   "recoil": "^0.7.7",
//   "tailwindcss": "^4.1.11"
// }

// Then run:
// npm run dev

//  Bonus Tip
// For now, avoid React 19 in production or learning projects unless you’re testing bleeding-edge features. Use React 18 for stability and compatibility with popular libraries.










