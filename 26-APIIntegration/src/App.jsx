import { useState } from 'react'
import './App.css'
import React from 'react';
import FetchExample from './Components/FetchExample'
import AxiosExample from './Components/AxiosExample'
import React, { useEffect, useState } from 'react';



// API Integration
// -	Fetch API / Axios
// -	useEffect with API calls
// -	Async/await and error handling

// 1. fetch() vs axios
// | Feature        | `fetch()` (Built-in)      | `axios` (Library)                |
// | -------------- | ------------------------- | -------------------------------- |
// | Simpler?       | Native, no install needed | Cleaner syntax, less boilerplate |
// | JSON auto?     | ❌ need `res.json()`       | ✅ auto-JSON response             |
// | Timeout        | ❌ needs manual setup      | ✅ built-in                       |
// | Error Handling | More verbose              | Easier with interceptors         |

//Syntax:
// Example1 — Using fetch()

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => setPosts(data))
//     .catch((err) => console.error("Error:", err));
// }, []);

//Example 2: 
//import FetchExample from './Components/FetchExample'

// function App() {
//   return (
//     <>
//        <div className="App">
//       <h1>React API Integration</h1>
//       <FetchExample />
//        </div>
//     </>
//   )
// }

// export default App



// axios
// axios is a popular 3rd-party HTTP client built on top of XMLHttpRequest, often used in React apps.
// Install:
// npm install axios

//  Syntax Example:

// import axios from 'axios';

// useEffect(() => {
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(res => setPosts(res.data))
//     .catch(err => console.error(err));
// }, []);


// Pros:
// Shorter syntax, easy to use
// Automatic JSON transformation
// Built-in request and response interceptors
// Timeout handling
// Cancel tokens
// Default headers support

// Cons:
// Extra package (increases bundle size)
// Slightly larger dependency

//Example:
// Required Setup:
// npm install axios

// App.jsx
// import AxiosExample from './Components/AxiosExample'

// function App() {
//   return (
//     <>
//       <h1>React API Integration</h1>
//       <AxiosExample />
//     </>
//   )
// }

// export default App

// useEffect for API calls
// useEffect is used to fetch data when the component mounts or when a dependency changes.
// useEffect(() => {
//   // fetch or axios logic
// }, [/* dependencies */]);
// Empty [] = run once on mount

// Add variables = refetch on change (e.g. userId)

// 3. async/await + Error Handling

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) throw new Error("Network response failed");
//       const data = await res.json();
//       setUsers(data);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setError(error.message);
//     }
//   };

//   fetchData();
// }, []);

//Full example on:Fetch API Call with useEffect & async/await + Error Handling

// import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <ul className="list-disc ml-6">
          {users.map(user => (
            <li key={user.id} className="mb-1">{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;






