import { useRef, useState } from 'react'
import './App.css'

//Lists and Keys
//When you want to render multiple elements from an array, use .map() inside JSX.
//Example 1
// const fruits = ["orange","apple","grapes","bluebarry","strawberry"]

// function App() {

//   return (
//     <>
//     <ul>
//       {fruits.map((fruit,index) =>{
//         <li key={index}>{fruit}</li>
//       })}
//     </ul>
//     </>
//   )
// }

//The key prop is a unique identifier for each item in a list.
//It helps React optimize rendering by keeping track of which items changed, were added, or removed.
//Example 
//Use a unique value from your data (e.g., id) — avoid using index if the list is dynamic.

// function App(){
//   const users = [
//   { id: 101, name: "Shreya" },
//   { id: 102, name: "Yash" },
//   { id: 103, name: "Ganesh" }
// ];
//   return(
//     <> 
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>  
//     </>
//   )
// }

//Forms and Controlled Components
//A controlled component is a component that is controlled by its parent component.
//The parent component manages the state of the child component.
//Forms in React: In React, you manage the form input values using state.These are called controlled components
//Example- Controlled Input

// function App(){

//   const[name, setName]=useState("");

//   const handleChange = (e) => setName(e.target.value);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Hello , ${name}`)
//   }

//   return(
//     <>
//      <form onSubmit={handleSubmit}>
//       <input className="border-4 border-sky-500 rounded-xl" type ="text" value ={name} onChange={handleChange}/> 
//       <button className="bg-blue-500 text-white text-3xl p-3 rounded-xl" type="submit">Submit</button>
//      </form>
//     </>
//   )
// }

//Multiple Inputs (with object state)
//Example
// function App(){

//   const[formData, setFormData] = useState({name: "" , email : ""});
  
//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData((prev) => ({...prev, [name]:value}))
//   }
  
//   return(
//     <>
//     <input className="text-3xl bg-cyan-500 shadow-lg shadow-cyan-500/50 p-4" 
//     name="name" value={formData.name} onChange={handleChange} />
//     <input className="text-3xl bg-indigo-500 shadow-lg shadow-indigo-500/50 p-4" 
//     name ="email" value ={formData.email} onChange={handleChange}/>
    
//     </>
//   )
// }

//Example- Uncontrolled Input

function App(){
const inputRef = useRef();

const handleSubmit = () => {
  alert(inputRef.current.value);
}

  return(
    <>
    <input
        className="bg-cyan-500 shadow-lg shadow-cyan-500/50"
        ref={inputRef}
        type="text"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  )
}
export default App
