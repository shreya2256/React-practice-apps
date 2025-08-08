import { useState } from 'react'
import './App.css'
import React from 'react'
import { Component } from 'react';
import { Suspense, lazy } from "react";

//Topics are:
// - Error boundaries
// - Lazy loading and code splitting
// -React.Fragment, Portals

// 1. Error Boundaries
//  What is an Error Boundary?
// A component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI instead of crashing the whole app.
//  Only works in class components.
// When to Use It:
// Handling crashes in part of the UI
// Preventing full app crash due to one faulty component
// Logging errors gracefully

//Example:

// Error Boundary class component
// class ErrorBoundary extends React.Component {
//   constructor() {
//     super();
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state to show fallback UI
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     // You can log the error to an error reporting service
//     console.error("Logged Error:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong.</h2>;
//     }

//     return this.props.children;
//   }
// }

// // Component that may throw an error
// function BuggyComponent() {
//   throw new Error("Simulated error");
//   return <div>This won't render.</div>;
// }

// App component using the ErrorBoundary
//the code which contains error should wrap up.
//Syntax is
{/* <ErrorBoundary>
  <ProblemComponent /> // component which having problem
</ErrorBoundary> */}

// function App() {
//   return (
//     <ErrorBoundary>
//       <BuggyComponent />
//     </ErrorBoundary>
//   );
// }

// export default App;
//check console for more detail error!



// 2. Lazy Loading & Code Splitting
// What is Code Splitting?
// Breaking your bundle into smaller pieces and loading only what’s needed — improves initial load speed.

// React Lazy + Suspense


//for below code we need file such as "./HeavyComponent"
// const HeavyComponent = lazy(() => import("./HeavyComponent"));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <HeavyComponent />
//     </Suspense>
//   );
// }
// export default App;

// The HeavyComponent is only loaded when needed.

// Use Cases:
// Routes (React Router + lazy)
// Big components only used conditionally
// Admin panels, charts, modals, etc.



// 3.React.Fragment
// Used to return multiple elements without adding extra DOM nodes.

// Instead of:
// <div>
//   <h1>Title</h1>
//   <p>Paragraph</p>
// </div>
// Use:

// <React.Fragment>
//   <h1>Title</h1>
//   <p>Paragraph</p>
// </React.Fragment>


// Or shorthand:
// <>
//   <h1>Title</h1>
//   <p>Paragraph</p>
// </>

// 4.React Portals
// Allows rendering a component outside the root DOM tree, useful for modals, tooltips, overlays.

import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}

//Render Modal anywhere in your app:
function App() {
  return (
    <div>
      <Modal>I'm outside the root!</Modal>
    </div>
  )
}

export default App

//to check changes add below line into the "index.html" file
{/* <body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body> */}



