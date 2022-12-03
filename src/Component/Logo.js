import React from "react";
// import "../Style/logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <div
        className="container"
        style={{ color: "#00973a", fontWeight: "bolder" }}
      >
        <Link to="/">
          <div style={{ color: "#00973a", fontWeight: "bold" }}>
            <div className="disc">
              <h4>
                B<span style={{ color: "#00973a" }}>X</span>4
                <br />E<span style={{ color: "#00973a" }}>&</span>T
              </h4>
            </div>
          </div>
        </Link>
        <div>
          <h6>BX4 ENGINEERING & TECHNOLOGY LLC</h6>
        </div>
      </div>
    </div>
  );
}

export default Logo;
