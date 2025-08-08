import { useLocation } from "react-router-dom";

function Debug() {
  const location = useLocation();
  return <pre>{JSON.stringify(location, null, 2)}</pre>;
}

export default Debug;
