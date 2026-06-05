import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiChevronDown, FiLogOut } from "react-icons/fi";

import Logo from "../assets/Logo.png";
import "./Navbar.css";
import { logoutUser } from "../auth";

function NavbarBlog() {
  const [user, setUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedUser = localStorage.getItem("username");
    setUser(loggedUser || null);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("username");
      localStorage.removeItem("isLoggedIn");
      setUser(null);
      setShowProfileDropdown(false);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="banner-container py-2 text-center">
        <a href="#newsletter" className="banner-link d-inline-flex align-items-center">
          Subscribe to our Newsletter For New & latest Blogs and Resources
          <span className="banner-arrow">↗</span>
        </a>
      </div>

      <Navbar expand="lg" variant="dark" className="custom-navbar">
        <Container fluid className="px-5">

          {/* LOGO */}
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <img src={Logo} alt="Logo" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="mx-auto gap-2">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/news-page">News</Nav.Link>
              <Nav.Link as={NavLink} to="/podcast-page">Podcasts</Nav.Link>
              <Nav.Link as={NavLink} to="/hero-res">Resources</Nav.Link>

              {!user && (
                <>
                  <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
                </>
              )}
            </Nav>

            <Nav className="ms-auto align-items-center gap-3">

              {user && (
                <div className="profile-dropdown-container" ref={profileRef}>
                  <button
                    className={`profile-trigger-btn ${showProfileDropdown ? "active" : ""}`}
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  >
                    <div className="admin-avatar">
                      {user[0]?.toUpperCase()}
                    </div>
                    <FiChevronDown className="arrow-icon" />
                  </button>

                  {showProfileDropdown && (
                    <div className="profile-popup">
                      <div className="profile-popup-header">
                        <span className="admin-role-tag">User</span>
                        <p className="welcome-text">Welcome back,</p>
                        <p className="welcome-name">{user}</p>
                      </div>

                      <div className="profile-popup-divider"></div>

                      <div className="profile-popup-body">
                        <button className="logout-btn-dropdown" onClick={handleLogout}>
                          <FiLogOut />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <Button className="btn-contact" onClick={() => navigate("/contact-page")}>
                Contact Us
              </Button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBlog;