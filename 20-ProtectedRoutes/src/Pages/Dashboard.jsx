// Dashboard.jsx
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <h2>Dashboard (Protected)</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
