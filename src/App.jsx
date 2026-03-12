import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./Pages/Home";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) return <Loader />;

  return <Home />;
}

export default App;