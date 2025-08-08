// Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

//Notes
// Using <Link> for Navigation (Declarative)
// You can use <Link> inside any component that represents a page or layout — typically in:
// 1.A Navbar component
// 2.A Sidebar
// 3.Or inside any JSX component where you want clickable navigation

// Using useNavigate() for Programmatic Navigation
// You can use useNavigate() inside any functional component when you want to navigate after:
// A button click
// A form submission
// An API call response

// Example: Login Button

// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // logic to validate login
//     // if successful:
//     navigate("/dashboard");
//   };

//   return <button onClick={handleLogin}>Login</button>;
// }

// export default Login;

// //Summary
// | Navigation Type       | Where to Use                            | Purpose                          |
// | --------------------- | --------------------------------------- | -------------------------------- |
// | `<Link to="/path" />` | In JSX/HTML-like layout: Navbars, pages | User clicks to navigate          |
// | `useNavigate()`       | Inside any functional component         | Navigate after some logic/action |
