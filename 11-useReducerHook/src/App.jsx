import { useReducer, useState } from 'react'
import './App.css'

// useReducer
// useReducer is an alternative to useState, typically used when:
// The state logic is complex (multiple values or conditional updates).
// You want centralized state updates via an action → reducer pattern (similar to Redux).
//Syntax
//const [state, dispatch] = useReducer(reducerFunction, initialState);

// When to Use useReducer:
// Use Case	                        =>Reason
// Complex state logic	            =>Better than multiple useState calls
// State depends on previous state	=>Clear and consistent
// Redux-like patterns	            =>Easy transition to global state

//Example:Example 1: Simple Counter

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment": return state + 1;
//     case "decrement": return state - 1;
//     case "reset": return 0;
//     default: return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => dispatch({ type: "increment" })}>+</button>
//       <br/>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <br/>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// export default App;

//Example 2: Manage Form State with useReducer

// const initialState = {
//   name: "",
//   email: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "update_name":
//       return { ...state, name: action.payload };
//     case "update_email":
//       return { ...state, email: action.payload };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// }

// function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <form>
//       <input
//       className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-center rounded-xl p-3'
//         type="text"
//         value={state.name}
//         onChange={(e) => dispatch({ type: "update_name", payload: e.target.value })}
//         placeholder="Name"
//       />
//       <input
//       className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-center rounded-xl p-3'
//         type="email"
//         value={state.email}
//         onChange={(e) => dispatch({ type: "update_email", payload: e.target.value })}
//         placeholder="Email"
//       />
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       type="button" onClick={() => dispatch({ type: "reset" })}>
//         Reset
//       </button>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//     </form>
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

//Example 3: Todo List (Real-world Case)

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  return (
    <>
      <input
      className='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-center rounded-xl p-3'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button 
      className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => {
        dispatch({ type: "add", payload: text });
        setText("");
      }}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button 
            className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
            onClick={() => dispatch({ type: "remove", payload: todo.id })}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}


function App() {
  return (
    <>
      <TodoApp/>
    </>
  )
}

export default App











