// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Artifacts/bhakarLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <span className="logo-container">
        <img className="logo-img" src={logo} alt="Logo" />
        <h3>आचार्य भास्कर शुक्ला</h3>
      </span>
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <nav
        className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
          About
        </a>
        <a href="#poojalist" onClick={() => setIsMobileMenuOpen(false)}>
          Poojas
        </a>
        <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>
          Products
        </a>
        <a
          className="contactme"
          href="#contactUs"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
