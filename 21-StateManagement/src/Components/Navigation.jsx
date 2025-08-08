// src/components/Navigation.jsx
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const { user, login, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button 
          className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3"
          onClick={logout}>Logout</button>
        </>
      ) : (
        <button 
        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-3xl text-white text-center rounded-xl p-3"
        onClick={() => login("Shreya")}>Login</button>
      )}
    </nav>
  );
}

export default Navigation;
