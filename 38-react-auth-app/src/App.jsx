import './App.css'
// /Authentication in React with JWT, login/logout flow, and role-based rendering 
//install
//npm install react-router-dom axios

// src/
// │
// ├── auth/
// │   ├── AuthProvider.jsx
// │   ├── ProtectedRoute.jsx
// │
// ├── pages/
// │   ├── Login.jsx
// │   ├── Dashboard.jsx
// │   └── Admin.jsx
// │
// ├── App.jsx
// └── main.jsx


// App.jsx
import { useRoutes } from "react-router-dom";
import routes from "./routes"; // ✅ make sure this path is correct

function App() {
  const element = useRoutes(routes); // ✅ safe now
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {element}
    </div>
  );
}

export default App;

