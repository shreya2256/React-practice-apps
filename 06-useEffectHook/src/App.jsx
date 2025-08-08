import { useEffect, useState } from 'react'
import './App.css'

//useEffect
// useEffect is a hook used to handle side effects in functional components. Side effects include:
// API calls
// Setting up subscriptions/listeners
// Manually changing the DOM
// Timers or intervals
// Local storage interactions
// Cleanup (like clearing timers)

//Syntax:
// useEffect(() => {
//   //side-effect logic here

//   return () => {
//     //cleaup logic(optional)
//   }
// }, [dependencies])

//Example 1
//check o/p in console of browser
// function App() {
//   useEffect( () => {
//     console.log("Component mounted")
//   }
//     ,[])
//   return (
//     <> 
//     <h1>Hello</h1>
//     </>
//   )
// }

// export default App

//Example 2:
//Note:  [] ensures it runs only once after initial render.

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component rendered or count changed');
//   }, [count]); // Dependency array
// }

// function App() {
//   return (
//     <div>
//       <h1>UseEffect</h1>
//       <Timer/>
//     </div>
//   )
// }

// export default App


//Example:  Fetch API Data on Mount
//This is a very common interview pattern — calling APIs on component load.

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <>
//       <h1>Users</h1>
//       <ul>
//         {users.map(user => <li key={user.id}>{user.name}</li>)}
//       </ul>
//     </>
//   );
// }
// export default App;

//Example:Run Effect on State Change
//This is a very common pattern — updating the component when the state changes.

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed to:", count);
//   }, [count]);

//   return <button className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//    onClick={() => setCount(count + 1)}>Click {count}</button>;
// }

// export default App;

//Example:Time/Interval 
//Clean up setInterval using the return function — very important for avoiding memory leaks.

// function App() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup
//   }, []);

//   return <h1>Seconds: {seconds}</h1>;
// }
// export default App;

//Example:Add & Remove Event Listener

// function App() {
//   useEffect(() => {
//     const handleResize = () => console.log("Window resized");

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <h1>Resize window and check console</h1>;
// }
// export default App;

//Example : Local Storage
//for local storage check as it as:
// developer tools => Application => storage => Local storage
function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}</p>
    </>
  );
}
export default App;

//  useEffect Behaviors:
// Syntax	Acts Like
// useEffect(() => {})	Runs after every render
// useEffect(() => {}, [])	Runs once (on mount)
// useEffect(() => {}, [dep])	Runs when dep changes


