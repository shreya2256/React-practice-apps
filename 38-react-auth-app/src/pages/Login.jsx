import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const fakeLogin = async (email, password) => {
  // fake login: return token + role
  if (email === "admin@example.com" && password === "admin") {
    return { token: "admin-token-123", role: "admin" };
  }
  if (email === "user@example.com" && password === "user") {
    return { token: "user-token-123", role: "user" };
  }
  throw new Error("Invalid credentials");
};

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, role } = await fakeLogin(form.email, form.password);
      login({ token, role });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg bg-white rounded-lg">
      <h2 className="text-2xl mb-4 font-bold">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="border px-3 py-2 mb-3 w-full"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="border px-3 py-2 mb-3 w-full"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
