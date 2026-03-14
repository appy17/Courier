import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <Loader />;

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;