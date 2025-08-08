import { useMemo, useState } from 'react';
import './App.css'

//useMemo is used to memoize a computed value — meaning it remembers the result of a function until its dependencies change.
//useMemo memoizes the result of a function — so it only recomputes when dependencies change.
//Used to avoid expensive recalculations on every render.
//Syntax
// const memoizedValue = useMemo(()=> computeExpensiveValue(a , b),[a,b]);
//const memoizedV=useMemo(() => first, [second])
// The function runs only if a or b changes.
// Helps avoid unnecessary expensive recalculations during renders.
// When to Use useMemo?
// 1.When you have expensive calculations (e.g., sorting, filtering large lists).
// 2.When you're passing computed props to children and want to avoid re-renders.
// 3.When optimizing performance in complex UIs.

//Example 1: 
//Without useMemo, this recalculates every render — even when num doesn’t change!

// function ExpensiveComponent({ num }) {
//   const [count, setCount] = useState(0);

//   const expensiveCalculation = (n) => {
//     console.log('Calculating...');
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) result += n;
//     return result;
//   };

//   const computedValue = useMemo(() => expensiveCalculation(num), [num]);

//   return (
//     <>
//       <p>Expensive Value: {computedValue}</p>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Re-render</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <ExpensiveComponent num={10}/> 
//     </>
//   )
// }

// export default App
//Explanation of above code:
//The ExpensiveComponent expects a prop num
//so it is necessary to pass the prop as for ex:
//<ExpensiveComponent num={10} />
//Explanation:
//useMemo(() => expensiveCalculation(num), [num]) will only call expensiveCalculation once initially, and only again when num changes.
//When you click the Re-render button, it doesn't recalculate, because num didn’t change.
//Without useMemo, every render would have re-calculated that heavy loop.
//Output (on screen):
//Expensive Value: 10000000000
// Output (in Console):
// Only once:
// Calculating...
// Even after multiple re-renders.

//Example 2 : Expensive Calculation
//Without useMemo, clicking Toggle Heavy would trigger recalculation — even though count hasn’t changed.

// function App() {
//   const [count, setCount] = useState(0);
//   const [heavy, setHeavy] = useState(false);

//   const expensiveComputation = (num) => {
//     console.log("Calculating...");
//     let total = 0;
//     for (let i = 0; i < 1e8; i++) {
//       total += num;
//     }
//     return total;
//   };

//   const computedValue = useMemo(() => expensiveComputation(count), [count]);

//   return (
//     <>
//       <h1>Expensive Result: {computedValue}</h1>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setCount(count + 1)}>Recalculate</button>
//       <br/>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setHeavy(!heavy)}>Toggle Heavy ({heavy.toString()})</button>
//     </>
//   );
// }
// export default App;

//Example:Memoizing a Sorted List
//useMemo avoids re-sorting the list unnecessarily unless sortAsc changes.
// function App() {
//   const [sortAsc, setSortAsc] = useState(true);

//   const numbers = [5, 2, 9, 1, 4];

//   const sortedNumbers = useMemo(() => {
//     console.log("Sorting...");
//     return [...numbers].sort((a, b) => sortAsc ? a - b : b - a);
//   }, [sortAsc]);

//   return (
//     <>
//       <button 
//       className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
//       onClick={() => setSortAsc(!sortAsc)}>
//         Toggle Sort ({sortAsc ? "Ascending" : "Descending"})
//       </button>
//       <ul>
//         {sortedNumbers.map((num, idx) => (
//           <li key={idx}>{num}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;


//Example 3: Avoid Re-rendering Child Components
//The child doesn’t unnecessarily re-render unless input changes.

const ExpensiveChild = ({ data }) => {
  console.log("Child Rendered");
  return <div>Processed Data: {data}</div>;
};

function App() {
  const [input, setInput] = useState("");

  const processedData = useMemo(() => {
    console.log("Processing...");
    return input.toUpperCase();
  }, [input]);

  return (
    <>
      <input 
      className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
      onChange={(e) => setInput(e.target.value)} />
      <ExpensiveChild data={processedData} />
    </>
  );
}
export default App;
//check output in console
// Processing...
// Child Rendered

