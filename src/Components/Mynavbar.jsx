import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import { auth } from "../firebase";
import logo from "../assets/logo-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is loaded
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is loaded
import "../Styles/Mynavbar.css";

function MyNavbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("You have been logged out.");
        navigate("/");
      })
      .catch((error) => alert("Error logging out: " + error.message));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiMenu size={28} />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deals">
                DEALS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACTS
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link logout" onClick={handleLogout}>
                    LOGOUT
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/OrderHistory">
                    <CgProfile className="icon-profile" />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Icons (Hidden on Mobile) */}
        <div className="d-flex align-items-center icon-section">
          <div className="icon-container">
            <FaHeart className="icon" />
            <span className="badge">8</span>
          </div>
          <div className="icon-container">
            <FaShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
