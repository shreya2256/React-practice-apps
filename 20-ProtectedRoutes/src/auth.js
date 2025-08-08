// auth.js
export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"; // Example logic
};
