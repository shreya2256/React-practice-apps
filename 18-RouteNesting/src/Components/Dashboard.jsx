import { Outlet, Link } from "react-router-dom";
// What is <Outlet />?
// <Outlet /> is a special component from react-router-dom.
// It acts as a placeholder where child routes will render inside the parent component.
// Think of it like a dynamic slot.
//  Where do you put <Outlet />?
// You put it inside the parent component (e.g., Dashboard.jsx) where you want the child components (like Profile.jsx, Settings.jsx) to be displayed.

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <img src="https://images.pexels.com/photos/30889575/pexels-photo-30889575.jpeg" alt="car" />
      <Outlet /> {/*  This is where child routes will render */}
    </div>
  );
}

export default Dashboard;
