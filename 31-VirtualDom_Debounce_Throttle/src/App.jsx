import './App.css'
import { useState } from 'react';
import DebounceInput from './DebounceInput'
import ThrottleScroll from './ThrottleScroll';
import React from 'react'

// Virtual DOM (Core Concept)
// A lightweight in-memory representation of the actual DOM.

//  How it works:
// You update the UI (state/props)
// React creates a new Virtual DOM
// Compares it (Diffing) with previous
// Calculates minimum required DOM changes
// Batch updates real DOM efficiently
//  Improves speed because real DOM is slow.

// What is the Virtual DOM?
// The Virtual DOM (VDOM) is a lightweight in-memory representation of the real DOM in a browser.

// React uses this virtual copy to efficiently update the UI without directly interacting with the real DOM on every change — which is slow and costly.

//Real DOM vs Virtual DOM
// | Feature      | Real DOM                    | Virtual DOM                      |
// | ------------ | --------------------------- | -------------------------------- |
// | Speed        | Slow                        | Fast                             |
// | Updates      | Directly updates the UI     | Batches updates efficiently      |
// | Memory usage | Higher                      | Lower                            |
// | Manipulation | Costly for frequent changes | Optimized with diffing algorithm |
// | Re-rendering | Repaints full DOM nodes     | Only updates what’s changed      |



// How Virtual DOM Works (Step-by-Step)
// Initial Render:

// React creates a Virtual DOM tree from your JSX code.

// It renders this to the real DOM for the first time.

// State/Prop Change:

// React creates a new Virtual DOM tree.

// It compares this new tree with the previous version using the diffing algorithm.

// Reconciliation:

// React figures out what has changed (called the "diff").

// Only the changed elements are updated in the real DOM, not the whole page.

// 🧪 Visual Example



// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>  {/* only this part updates in DOM */}
//       <button 
//       className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white  p-3'
//       onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
// export default App;


// When count changes, React:

// Creates a new Virtual DOM.

// Compares it to the old one.

// Finds only the <h1> element needs to change.

// Updates just that part in the real DOM.

// 💡 Why It’s Important
// Reduces unnecessary DOM manipulation

// Improves performance and responsiveness

// Enables smooth UI rendering even in complex apps

// 🧠 Key Terms
// Reconciliation: Comparing old and new virtual DOMs

// Diffing Algorithm: Finds minimal changes to update real DOM

// Declarative UI: Describe what UI should look like, React handles updates


// Debounce & Throttle (Input Performance)
// Debounce
// Delay execution until user stops typing.

// ✅ Used for: search bars, input fields
//Example : structural
// const debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// };

// Throttle
// Ensure function is called at most once every X ms.

// ✅ Used for: scroll, resize, drag events
//Example = structural
// const throttle = (fn, limit) => {
//   let lastCall = 0;
//   return (...args) => {
//     const now = Date.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       fn(...args);
//     }
//   };
// };


//Debounce - Real Time Example
// import DebounceInput from './DebounceInput'
// import React from 'react'

// function App() {
//   return (
//     <>
//       <DebounceInput/>
//     </>
//   )
// }

// export default App
//for this check output in console, upto with we typing in input box and the moment we stops that time In console output is shpown
//output in console is shown as:
//in Input box type:Shreya Ganesh Shinde
//in console it llo a loike as :


//Throttle Example (React Scroll)
// import ThrottleScroll from './ThrottleScroll';
function App() {
  return (
    <>
      <ThrottleScroll/>
    </>
  )
}

export default App

// Avoiding Unnecessary Re-renders

// | Strategy                       | Example                                |
// | ------------------------------ | -------------------------------------- |
// | Lift state only when needed    | Don't store child-only state in parent |
// | `React.memo`                   | Avoids re-renders on same props        |
// | `useCallback`                  | Prevents new function references       |
// | `useMemo`                      | Prevents recalculating values          |
// | Key prop in lists              | Ensure `key` is stable and unique      |
// | Avoid inline functions/objects | Use `useCallback` or constants         |



























































