import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/user/shreya">Shreya</Link> |{" "}
      <Link to="/user/yashwant">Yashwant</Link>
    </nav>
  );
}

export default Navigation;
