// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
