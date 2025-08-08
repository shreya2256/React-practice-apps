
import './App.css'
import React, { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary'
import BuggyComponent from './BuggyComponent'


// Smart Data Fetching in React
// We'll cover:
// Loading States (manual vs auto)
// Error Boundaries vs Error Handling
// React Query ( highly recommended)
// SWR (lightweight alternative)

//Loading States (manual vs auto)
//Example
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// const [data, setData] = useState([]);

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const res = await fetch(URL);
//       const json = await res.json();
//       setData(json);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   fetchData();
// }, []);

//Example: Real TIME

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);  // loading state
//   const [error, setError] = useState(null);      // error state

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         if (!res.ok) throw new Error('Failed to fetch');
//         return res.json();
//       })
//       .then(data => setData(data))
//       .catch(err => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>⏳ Loading...</p>;
//   if (error) return <p>❌ Error: {error}</p>;

//   return (
//     <div>
//       <h2>📄 Posts</h2>
//       {data.slice(0, 5).map(post => (
//         <div key={post.id}>
//           <strong>{post.title}</strong>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;


// Error Boundaries (Recap)
// Used to catch rendering errors, not async ones.
// What is an Error Boundary?
// An Error Boundary is a React component that catches JavaScript errors in its child component tree, logs those errors, and displays a fallback UI instead of crashing the whole app.
// Note: Error boundaries only catch errors in class components, so the error boundary itself must be a class component.


// class ErrorBoundary extends React.Component {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) return <h2>Something went wrong.</h2>;
//     return this.props.children;
//   }
// }
//  Still useful for wrapping components that might throw on render.

//Example - Real Time
//Folder Structure
// src/
// ├── App.jsx
// ├── ErrorBoundary.jsx
// ├── BuggyComponent.jsx
// └── main.jsx

// import ErrorBoundary from "./ErrorBoundary";
// import BuggyComponent from "./BuggyComponent";

function App() {
  return (
    <div className="App">
      <h1>Error Boundary Demo</h1>
      
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;









