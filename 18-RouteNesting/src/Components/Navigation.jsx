import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/dashboard/profile">Profile</Link> |{" "}
      <Link to="/dashboard/settings">Settings</Link>
    </nav>
  );
}

export default Navigation;
