import { useEffect, useState } from 'react'
import './App.css'
import { Component } from 'react';
import React from 'react';
//  Component Lifecycle
// Class Component Lifecycle Methods
// React class components have built-in methods that run at specific phases:
// | Phase      | Method                                          | Purpose                      |
// | ---------- | ----------------------------------------------- | ---------------------------- |
// | Mounting   | `constructor`, `componentDidMount`              | Init and load                |
// | Updating   | `componentDidUpdate`                            | Respond to prop/state change |
// | Unmounting | `componentWillUnmount`                          | Cleanup                      |
// | Error      | `componentDidCatch`, `getDerivedStateFromError` | Error handling               |

// class MyComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   componentDidMount() {
//     console.log("Component mounted");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component updated");
//   }

//   componentWillUnmount() {
//     console.log("Component will unmount");
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <>
//         <div>Count: {this.state.count}</div>
//         <button 
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={this.increment}
//         >
//           Increment
//         </button>
//       </>
//     );
//   }
// }

// function App() {
//   return (
//     <>
//       <MyComponent />
//     </>
//   );
// }

// export default App;

//Functional Component Lifecycle (using Hooks)
// | Lifecycle    | Functional Hook                      |
// | ------------ | ------------------------------------ |
// | Mount        | `useEffect(() => {}, [])`            |
// | Update       | `useEffect(() => {}, [deps])`        |
// | Unmount      | `return () => {}` inside `useEffect` |
// | State Change | `useState` / `useReducer`            |

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted or Updated");

    return () => {
      console.log("Cleanup before next run or unmount");
    };
  }, [count]);

  return <div>Count:{count}</div>;
}

function App() {
  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App

