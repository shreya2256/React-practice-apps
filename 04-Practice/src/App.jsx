import { useState } from 'react'
import React, { createContext, useContext } from "react";
import './App.css'

// Component Communication in React
// all 4 ways:
// 1.Parent to Child (via props)
// 2.Child to Parent (via callback functions)
// 3.Sibling to Sibling (via lifting state to parent)
// 4.useContext (for deep/nested component communication)

// 1.Parent to Child (via props)
//The parent component passes data or functions to the child component using props (short for "properties").

// function Child({name}){
//   return <h1>Hello, {name}</h1>
// }

// function App() {
//   const userName = "Yash";
//   return (
//     <>
//     <Child name={userName}/>
//     </>
//   )
// }

// 2. Child to Parent Communication (via Callback Functions)
// In React, a child component can communicate with its parent by calling a function passed down as a prop.
// This is useful when the child needs to notify the parent of some event or change.
// How It Works:
// Parent defines a function.

// Passes it as a prop to the child.

// Child calls the function with required data.


// function Child({ onMessageSend }) {
//   return (
//     <>
//       <button 
//         className="bg-green-500 text-white p-2 rounded" 
//         onClick={() => onMessageSend("Hello from Child!")}>
//         Send Message to Parent
//       </button>
//     </>
//   );
// }

// function App() {
//   const handleChildMessage = (msg) => {
//     alert(`Parent received: ${msg}`);
//   };

//   return (
//     <>
//       <h1>Child to Parent Communication</h1>
//       <Child onMessageSend={handleChildMessage} />
//     </>
//   );
// }

//3.Sibling to Sibling (via Parent as middleman)
// React has no direct sibling-to-sibling communication. Instead, lift the shared state to the parent.
// The parent can then pass the state down to the siblings as props.
// How It Works:
// Parent lifts the shared state.
// Parent passes the state as props to the siblings.
// Siblings use the props to communicate with each other.
// Example:

// function SiblingA({ onSend }) {
//   return <button className='bg-cyan-500 text-white shadow-lg shadow-cyan-500/50 p-4' 
//   onClick={() => onSend("Data from A")}>Send to B</button>;
// }

// function SiblingB({ received }) {
//   return <p className='bg-indigo-500 text-white text-3xl shadow-lg shadow-indigo-500/50 p-4'>
//     Received: {received}</p>;
// }

// function App() {
//   const [data, setData] = useState("");

//   return (
//     <>
//       <SiblingA onSend={setData} />
//       <SiblingB received={data} />
//     </>
//   );
// }
// export default App;

// 4.useContext – For Deep Prop Sharing (Avoid Prop Drilling)
// Problem: Passing props through multiple nested components (prop drilling) becomes messy and hard to manage.
// Solution: React's useContext allows you to share state or data deeply in the component tree without manually passing props at each level.
// How It Works:
// Create a Context using createContext().
// Wrap the part of your app with Context Provider.
// Use useContext() in any child to access the shared value.

// Purpose:
// This is a classic useContext pattern for things like:
// Theme (dark/light)
// Language
// Authentication state
// App-wide settings

//Example 1
// 1️. Create Context
// const UserContext = createContext();

// function ChildComponent() {
//   // 3️. Consume context value
//   const user = useContext(UserContext);
//   return <h2 className="text-blue-600 text-xl">Hello, {user}!</h2>;
// }

// function App() {
//   // 2️. Provide value via Context Provider
//   return (
//     <UserContext.Provider value="Shreya">
//       <div className="p-4 bg-gray-300">
//         <h1 className="text-2xl font-bold">useContext Example</h1>
//         <ChildComponent />
//       </div>
//     </UserContext.Provider>
//   );
// }

// export default App;

//Example 2
//1st step
const ThemeContext = createContext();

//3rd step
function Toolbar(){
  return <ThemedButton/>
}

function ThemedButton(){
  const theme = useContext(ThemeContext);           //useContext(ThemeContext) reads the nearest value of ThemeContext.Provider.
                                                    //That value is "dark" in this case, provided in App.
  return <button className={theme}>Theme:{theme}</button> 
}

//2nd step
// You're wrapping the Toolbar with a ThemeContext.Provider.
// This makes "dark" available to any component inside, including deeply nested ones like ThemedButton.
function App(){
  return(
    <ThemeContext.Provider value="dark">
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

export default App;







