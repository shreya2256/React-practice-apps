import { Link } from "react-router-dom";

const Home = () => (
  <div className="text-center mt-20">
    <h1 className="text-2xl font-bold mb-4">Welcome to Home</h1>
    <Link to="/login" className="text-blue-500 underline">Login</Link>
  </div>
);

export default Home;
