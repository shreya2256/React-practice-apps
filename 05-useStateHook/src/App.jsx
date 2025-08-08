import { useState } from 'react'
import './App.css'

// useState is a React Hook that lets you add state to functional components.
// It allows your component to remember values between renders (like user input, counters, toggles, etc.).
//Syntax
//const[state, setState] = useState(initialvalue);
//state=> current value of the state
//setState=> function to update the state
//initialvalue=>default value(can be number, String,object,array,boolean etc)

//Example 1 => Counter using useState
// function App(){
//   const[count, setCount] = useState(0); //initial staate is 0

//     const handleChange1=() =>{
//       setCount(count+1); //update state
//     }

//     const handleChange2=() =>{
//       setCount(count-1); //update state
//     }

//   return(
//     <>
//     <h1>Count: {count}</h1>
//     <button className=' text-3xl text-white bg-blue-500 shadow-lg shadow-blue-500/50 p-4' 
//     onClick={handleChange1}>Increment</button>
//     <br />
//     <br />
//     <button className=' text-3xl text-white bg-blue-500 shadow-lg shadow-blue-500/50 p-4' 
//     onClick={handleChange2}>Decrement</button>

//     </>
//   )
// }

// export default App

//Example 2 - Input Field using useState

// function App() {
//   const [name, setName] = useState("");
//   return (
//     <>
//     <input className='bg-cyan-500 shadow-lg shadow-cyan-500/50 p-4 text-3xl text-white'
//     type="text" 
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     placeholder='Enter your name:'
//     />
//     <p>Hello {name}</p>
//     </>
//   )
// }

// export default App

// Concept	Explanation
// Re-render	Changing state causes a re-render of the component.
// Async behavior	State updates are asynchronous – changes may not reflect immediately after calling setState.
// Replaces Class this.state	You no longer need class-based state (this.state) in functional components.

//Example 3
// function App() {
//   const [count, setCount] = useState(0);

//   const incrementTwice = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   return <button onClick={incrementTwice}>Click</button>;
// }
// Answer: Only 1 increment happens. count + 1 is based on stale state in both calls.

// Correct way:

// setCount(prev => prev + 1);
// setCount(prev => prev + 1);
// Now it increases by 2.

//Example 4:Manage Boolean Toggle (Show/Hide / Dark Mode)

// function App() {
//   const[isVisible, setIsVisible]=useState(false);

//   return (
//     <>
//       <button className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-4'
//       onClick={ () => setIsVisible(!isVisible)}>
//         {isVisible ? 'Hide' : 'Show'} Message 
//       </button>
//       {isVisible && <p>This is a toggleable message!</p>}
//     </>
//   )
// }

// export default App

//Example 5: Managing Object State (like form)
// function Form() {
//   const [form, setForm] = useState({ name: '', email: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <input className='bg-cyan-500 shadow-lg shadow-cyan-500/50 p-4 text-3xl text-white'
//       name="name" value={form.name} onChange={handleChange} placeholder="Name" />
//       <br />
//       <br />
//       <input className='bg-cyan-500 shadow-lg shadow-cyan-500/50 p-4 text-3xl text-white'
//       name="email" value={form.email} onChange={handleChange} placeholder="Email" />
//       <p>Hello {form.name}, your email is {form.email}</p>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Form/>
//     </>
//   )
// }

// export default App


//Example 5: Using Arrays - Add / Remove Items (To-Do List Style)

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState('');

//   const addTodo = () => {
//     if (task.trim()) {
//       setTodos([...todos, task]);
//       setTask('');
//     }
//   };

//   return (
//     <>
//       <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task" />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, idx) => (
//           <li key={idx}>{todo}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <TodoList/>
//     </div>
//   )
// }

// export default App

//Example 6:Update Array State (e.g. Mark task as complete)

// function TaskManager() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Learn React', done: false },
//     { id: 2, title: 'Crack Interview', done: false }
//   ]);

//   const toggleDone = (id) => {
//     const updated = tasks.map((task) =>
//       task.id === id ? { ...task, done: !task.done } : task
//     );
//     setTasks(updated);
//   };

//   return (
//     <>
//       {tasks.map((task) => (
//         <div key={task.id}>
//           <input  className='bg-blue-500 shadow-lg shadow-blue-500/50 text-3xl p-4 text-center text-white '
//           type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)} />
//           <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
//             {task.title}
//           </span>
//         </div>
//       ))}
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <TaskManager/>
//     </div>
//   )
// }

// export default App

//Example 7:useState with Callback Pattern (Increment Twice Correctly)

// function DoubleClick() {
//   const [count, setCount] = useState(0);

//   const handleDoubleClick = () => {
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   };

//   return (
//     <>
//       <h2>{count}</h2>
//       <button className='bg-blue-500 shadow-lg shadow-blue-500/50 p-4 text-3xl text-center'
//       onClick={handleDoubleClick}>Click Twice</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <DoubleClick/>
//     </div>
//   )
// }

//export default App

//Example :Reset State to Initial Value
// function ResetExample() {
//   const initialValue = { name: '', age: '' };
//   const [form, setForm] = useState(initialValue);

//   const resetForm = () => setForm(initialValue);

//   return (
//     <>
//       <input  className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white text-3xl p-3'
//       name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
//       <br/>
//       <input  className='bg-blue-500 shadow-lg shadow-blue-500/50 text-white text-3xl p-3'
//       name="age" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
//       <br/>
//       <button className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-3'
//       onClick={resetForm}>Reset</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ResetExample/>
//     </div>
//   )
// }

// export default App

//Example:Dynamic Inputs – Add Multiple Fields

function DynamicInputs() {
  const [fields, setFields] = useState(['']);

  const handleChange = (i, value) => {
    const newFields = [...fields];
    newFields[i] = value;
    setFields(newFields);
  };

  const addField = () => setFields([...fields, '']);

  return (
    <>
      {fields.map((val, i) => (
        <input key={i} value={val} onChange={(e) => handleChange(i, e.target.value)} />
      ))}
      <button onClick={addField}>Add Input</button>
    </>
  );
}

function App() {
  return (
    <div>
      <DynamicInputs/>
    </div>
  )
}

export default App





