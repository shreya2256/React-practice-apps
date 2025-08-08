import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link>  {/* Use proper path */}
      <Link to="/debug">Debug</Link>
    </nav>
  );
}

export default Navigation;
