import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="menu-icon d-lg-none d-block" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fas fa-bars"}></i>
          </div>
          <ul
            className={`d-flex align-items-center ${
              click ? "nav-menu active" : "nav-menu"
            }`}
          >
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={closeMobileMenu}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="login-area d-flex align-items-center">
            <li>
              <Link to="/sign-in">
                <i className="fa-solid fa-chevron-right"></i>Sign In
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fa-solid fa-chevron-right"></i>Register
              </Link>
            </li>
            <li>
              <Link to="/contact" className="primary-btn">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header>
        <div className="container">
          <div className="header-area d-flex justify-content-between align-items-start">
            <div className="logo">
              <img
                src="./images/logo.png"
                alt={"logo"}
                className="img-fluid"
                style={{ maxWidth: "10rem" }}
              />
            </div>
            <div className="contact d-flex">
              <div className="box d-flex align-items-center">
                <div className="icons">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="text">
                  <h4>Working Hours</h4>
                  <Link to="/contact">Monday - Sunday: 9.00 to 6.00pm</Link>
                </div>
              </div>
              <div className="box d-flex align-items-center">
                <div className="icons">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="text">
                  <h4>Call Us</h4>
                  <Link to="/contact">+011 123 4567</Link>
                </div>
              </div>
              <div className="box d-flex align-items-center">
                <div className="icons">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="text">
                  <h4>Mail Us</h4>
                  <Link to="/contact">info@example.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
