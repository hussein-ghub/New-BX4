import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
// import "../Style/navStyle.css";
import { Link } from "react-router-dom";
import Logo from "../images/BX4 -logos_transparent.png";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className="navsect">
      <header>
        <img src={Logo} alt="" className="logo" />
        <nav ref={navRef}>
          <Link onClick={hideNavbar} to="home">
            HOME
          </Link>
          <Link to="about">ABOUT</Link>
          <Link to="services">SERVICES</Link>
          <Link to="industries">INDUSTRIES</Link>
          <Link to="team">TEAM</Link>
          <Link to="leadership">LEADERSHIP</Link>
          <Link onClick={hideNavbar} to="contact">
            CONTACT
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
