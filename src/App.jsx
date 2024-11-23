import { Routes, Route } from "react-router-dom";
import Mynavbar from "./Components/Mynavbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Register from "./Components/Register";
import Login from "./Components/Login";
import OrderHistory from "./Components/OrderHistory";
import Deals from "./Components/Deals";
import AdminDashboard from "./Components/AdminDashboard"; 
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
       
        <Route
          path="/OrderHistory"
          element={
            user?.email === "adminhfc123@gmail.com" ? (
              <AdminDashboard />
            ) : (
              <OrderHistory />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
