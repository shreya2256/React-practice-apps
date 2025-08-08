import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p className="mb-3">Welcome! Your role is: {user.role}</p>
      <button
        className="bg-red-500 px-4 py-2 text-white rounded"
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
