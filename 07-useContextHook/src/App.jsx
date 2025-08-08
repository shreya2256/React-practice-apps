import { useState } from 'react'
import './App.css'
import React from 'react';
import { useContext,createContext } from 'react';

//The useContext hook lets you read and subscribe to React context in a functional component. 
// It prevents "prop drilling", where props are passed down through many layers.

//Example:

// const ThemeContext = React.createContext(); // Step 1: Create context

// function Toolbar() {
//   return <ThemedButton />;
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext); // Step 3: Consume value
//   return <button className={theme}>Theme: {theme}</button>;
// }

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">  
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }
// export default App;

//Example : Auth Context
// const AuthContext = React.createContext();

// function Dashboard() {
//   return <Profile />;
// }

// function Profile() {
//   const user = useContext(AuthContext);
//   return <h2>Welcome, {user}</h2>;
// }

// function App() {
//   const [user, setUser] = useState("Shreya");

//   return (
//     <AuthContext.Provider value={user}>
//       <Dashboard />
//     </AuthContext.Provider>
//   );
// }

// export default App;

// eexample: Multi-level Prop Sharing
// const UserContext = React.createContext();

// function Layout() {
//   return <Sidebar />;
// }

// function Sidebar() {
//   return <UserPanel />;
// }

// function UserPanel() {
//   const user = useContext(UserContext);
//   return <h2>Welcome {user.name}, Role: {user.role}</h2>;
// }

// function App() {
//   const user = { name: "Shreya", role: "Admin" };

//   return (
//     <UserContext.Provider value={user}>
//       <Layout />
//     </UserContext.Provider>
//   );
// }
// export default App;


//Example :Theme + Language (Nested Contexts)
////Multiple context consumption.

// const ThemeContext = React.createContext();
// const LangContext = React.createContext();

// function Page() {
//   const theme = useContext(ThemeContext);
//   const lang = useContext(LangContext);

//   return (
//     <div className={theme}>
//       <p>{lang === "en" ? "Hello" : "Hola"} World!</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <LangContext.Provider value="en">
//         <Page />
//       </LangContext.Provider>
//     </ThemeContext.Provider>
//   );
// }
// export default App;

//Example:Toggle Auth Status

// const AuthContext = React.createContext();

// function Navbar() {
//   const { isLoggedIn, toggleAuth } = useContext(AuthContext);

//   return (
//     <div>
//       <button onClick={toggleAuth}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//       <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
//     </div>
//   );
// }

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
//       <Navbar />
//     </AuthContext.Provider>
//   );
// }
// export default App;

//Example:Shopping Cart Context

const CartContext = React.createContext();

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>Products</h3>
      <button 
      className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => addToCart("Shirt")}>Add Shirt</button>
      <br/>
      <br/>
      <button 
      className='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3'
      onClick={() => addToCart("Pants")}>Add Pants</button>
    </div>
  );
}

function Cart() {
  const { cart } = useContext(CartContext);
  return <div>Items: {cart.join(", ")}</div>;
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <ProductList />
      <Cart />
    </CartContext.Provider>
  );
}
export default App;


