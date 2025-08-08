import './App.css'

// React Performance Optimization
// We’ll cover:
// 1. React.memo
// 2. useMemo
// 3. useCallback

// 1. React.memo =>(Component Memoization)
//Prevents unnecessary re-renders of functional components if their props haven’t changed.
// Usage:
// const Child = React.memo(function Child({ name }) {
//   console.log("Rendered:", name);
//   return <div>Hello {name}</div>;
// });

// Only re-renders when name prop changes.
// Best for pure UI components.

//Custom comparison function (optional):

// React.memo(Component, (prevProps, nextProps) => {
//   return prevProps.name === nextProps.name;
// });


//  2. useMemo
// Memoizes a calculated value, preventing recomputation on every render.

// Syntax:
// const expensiveResult = useMemo(() => heavyCalculation(input), [input]);

// Use when:

// You're doing expensive computation (sorting, filtering)
// Dependencies rarely change

//  Example:
// const filteredItems = useMemo(() => {
//   return items.filter(item => item.includes(search));
// }, [items, search]);


// 3. useCallback
// Memoizes a function reference, preventing re-creation on every render.
//  Syntax:
// const handleClick = useCallback(() => {
//   console.log("clicked");
// }, []);
//Use when:

// Passing callbacks to child components

// Preventing unnecessary renders when children depend on function props

// 🔁 Combine with React.memo:

// const Button = React.memo(({ onClick }) => {
//   console.log("Button Rendered");
//   return <button onClick={onClick}>Click</button>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []);

//   return (
//     <>
//       <Button onClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Parent +</button>
//     </>
//   );
// }















