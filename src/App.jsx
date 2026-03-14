import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./Pages/Home";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <Loader />;

  return <Home />;
}

export default App;