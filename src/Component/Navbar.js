import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
// import "../Style/navStyle.css";
import { Link } from "react-router-dom";
import Logo from "../images/BX4 -logos_transparent.png";
import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div className="navsect">
      <header>
        <Link to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <nav ref={navRef} className="navstart">
          <Link to="home">HOME</Link>

          <NavDropdown
            title="SERVICES"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <NavDropdown.Item to="">
              <Link
                className="text-dark"
                to="services/responsive Web Devlopment"
              >
                Responsive Web Devlopment
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item to="">
              <Link
                className="text-dark"
                to="services/engineering & Technology"
              >
                Engineering & Technology
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item to="">
              <Link className="text-dark" to="services/Precise Web Design">
                Precise Web Design
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="">
              <Link className="text-dark" to="services/ecommerce Website">
                Ecommerce Website
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          {/* </Link> */}
          <Link to="about">ABOUT</Link>
          {/* <Link to="services">SERVICES</Link> */}
          <Link to="industries">INDUSTRIES</Link>
          <Link to="team">TEAM</Link>
          <Link to="leadership">LEADERSHIP</Link>
          <Link to="contact">CONTACT</Link>
          <form class="form-inline">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "120px" }}
            />
            <button class="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
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
