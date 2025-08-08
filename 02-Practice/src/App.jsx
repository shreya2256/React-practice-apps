import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import React from 'react'

//state => state is built in object in react, it is used to store data that changes over time-like user inputs, toggles,counters
//Think of it as the "memory" of your component.
//When state changes → React re-renders the component automatically
//Multiple state variables
// const [name, setName] = useState("Shreya");
// const [age, setAge] = useState(20);

//Example1
//function App() {
//   //State in Function Components using useState()
//   const [count, setCount] = useState(0)

//   return (
//    <>
//    {/* <h2>State and setState (Class) / useState (Function)</h2> */}
//    <p>Count: {count}</p>
//    <button  className='bg-pink-500 text-3xl p-3' onClick={() => setCount(count + 1)}>Increment</button>
//    </>
//   )
// }


//Example2
// function App(){
//   // useState with object
//   const [user, setUser] = useState({ name: "Shreya", age: 20 });

//   const updateAge = () => {
//     setUser(prev => ({ ...prev, age: prev.age + 1 }));
//   };


//   return(
//     <>
//     <h1>Name:{user.name}</h1>
//     <h1>Age:{user.age}</h1>
//     <button  className='bg-blue-500 text-white text-3xl' onClick={updateAge}>Updated Age</button>
//     </>
//   )
// }


//State in Class Components
// Define class component OUTSIDE App
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button className='bg-red-500 text-2xl text-white rounded-xl p-2' onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// // App is a function component that uses <Counter />
// function App() {
//   return (
//     <div>
//       <h1>Welcome to Counter App</h1>
//       <Counter />
//     </div>
//   );
// }

//Event handling in React
// Key Differences 
// HTML	                               React
// onclick="myFunc()"	                 onClick={myFunc}
// Uses lowercase like onclick	       Uses camelCase like onClick
// Can call strings or JS	             Needs a function reference
// Default action allowed	             Often needs event.preventDefault()

// Common Event Types
// Event	=>Description
// onClick =>Click event
// onChange=>Input/textbox value change
// onSubmit=>	Form submission
// onMouseEnter=>	Hover start
// onFocus=>	Input focus
// onKeyDown =>	Keyboard key press


//click event in Function Component
//Example 1

// function clickButton(){
//   const handleClick = () => {
//     alert("Button Clicked");
//   }
//   return <button onClick={handleClick}>Click Me</button>
// };


// 

//React passes a synthetic event (cross-browser wrapper) to event handlers.
//Example 2 - Input Change

// function App() {
//   const handleChange = (e) => {
//     console.log("Value typed:", e.target.value);
//   };

//   return (
//     <>
//       <input type="text" onChange={handleChange} />
//     </>
//   );
// }

// Button with Parameter
//You can pass arguments to event handlers like this:
// function App({name}){
//   const greet = (name) =>{
//     alert(`Hello ${name}!`)
//   }

//   return(
//     <>
//     <button className='bg-blue-400 text-3xl text-white rounded-xl p-4'onClick={()=> {greet(name)}}>Say Hello</button>
//     </>
//   )
// }


//Prevent Default (e.g., in forms)
//Example 3
// function FormExample() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted!");
//   };

//   return (
//     <form   
//     onSubmit={handleSubmit}>
//       <input className='bg-pink-300 text-3xl text-white p-4'
//       type="text" placeholder="Enter name" />
//       <button className='bg-blue-400 text-3xl text-white p-4' 
//       type="submit">Submit</button>
//     </form>
//   );
// }

// function App(){

//   return(
//     <>
//     <FormExample/>
//     </>
//   )
// }

//Conditional Rendering?
//Conditional rendering means showing/hiding elements based on conditions — like if a user is logged in or not.

//if/else outside JSX
// function Greeting({isLoggedIn}){
//   if(isLoggedIn){
//     return <h1>Welcome back!</h1>
//   }
//   else {
//     return <h1>Please log in.</h1>
//   }
// }
// function App(){
//   return(
//     <>
//     {/* <Greeting isLoggedIn={true}/> */}
//     <Greeting isLoggedIn={false}/>
//     </>
//   )
// }

//Ternary Operator in JSX
// function App(){

//   function CheckLog(isLoggedIn){
//     return <p>{isLoggedIn? "Logout" :"Login"}</p>
//   }
//   return(
//     <>
//     <CheckLog/>
//     </>
//   )
// }

//Short-circuit (&&) Operator
//Useful when you want to render something only if condition is true
//In JavaScript, the expression: condition && expression Means:If condition is true, then return expression.”
//In React JSX: {isAdmin && <button>Delete User</button>}
//This means: If isAdmin is true, then render <button>Delete User</button>. Otherwise, render nothing (i.e., false = nothing in JSX).
//When not to use &&?
//If the condition could be 0, '', null, or undefined, it might lead to unexpected behavior:
// const items = 0;
//{items && <p>Items in cart: {items}</p>} // Will not render even though items = 0
//Use ternary items > 0 ? <p>Items: {items}</p> : null instead in such cases.

// function App(){
//   const isAdmin =true;
  
//   return(
//     <>
//     {isAdmin && <button>Delete User</button>}
//     </>
//   )
// }
//export default App;

//IIFE or Inline Functions
//This is an IIFE (Immediately Invoked Function Expression) that returns a JSX element based on
//the userRole variable. It's a shorthand way to write a function that returns JSX.
// function AdminPanel() {
//   return <h1>Welcome, Admin</h1>;
// }

// function UserPanel() {
//   return <h1>Welcome, User</h1>;
// }

// function GuestPanel() {
//   return <h1>Welcome, Guest</h1>;
// }

// function App() {
//   const userRole = 'admin';

//   return (
//     <>
//       {/* IIFE function */}
//       {(() => {
//         if (userRole === 'admin') return <AdminPanel />;
//         else if (userRole === 'user') return <UserPanel />;
//         return <GuestPanel />;
//       })()}
//     </>
//   );
// }


//Switch/Map-Based Rendering
// Using Switch Statement
// Good when rendering different components or content based on a single value (like user roles or page views).

// function App() {
//   const view = "home"; // Try "about", "contact", etc.

//   const renderView = () => {
//     switch (view) {
//       case "home":
//         return <h1>Home Page</h1>;
//       case "about":
//         return <h1>About Page</h1>;
//       case "contact":
//         return <h1>Contact Page</h1>;
//       default:
//         return <h1>404 Not Found</h1>;
//     }
//   };

//   return (
//     <>
//       {renderView()}
//     </>
//   );
// }
// export default App;

// Using Map-Based Rendering
// Best for rendering based on a key with predefined component mappings.

// function App() {
//   //const view = "about";
//   //const view = "home";
//   //const view = "Contact";
//   const view = "contact";

//   const viewMap = {
//     home: <h1>Home Page</h1>,
//     about: <h1>About Page</h1>,
//     contact: <h1>Contact Page</h1>,
//   };

//   return (
//     <>
//       {viewMap[view] || <h1>404 Not Found</h1>}
//     </>
//   );
// }

// export default App;