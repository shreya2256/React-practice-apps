import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(() => navigate("/dashboard"));
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <button onClick={handleLogin} className="bg-cyan-500 shadow-lg shadow-cyan-500/50 px-4 py-2 text-white rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
