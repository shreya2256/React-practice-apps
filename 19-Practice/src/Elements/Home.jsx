import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Programmatically navigate to /about
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button 
      className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-3xl text-white text-center rounded-xl p-3"
      onClick={handleClick}>Go to About</button>
      <img src="https://images.pexels.com/photos/30601477/pexels-photo-30601477.jpeg" alt="Porsche" />
    </div>
  );
}

export default Home;
