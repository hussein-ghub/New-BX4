import React from "react";
// import "../Style/about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="bgcolor marTop Services container-fluid"
    >
      <center>
        <h2
          className="indu-title"
          style={{
            " font-size": "55px",
            color: "#000000",
            "letter-spacing": "0.06em",
          }}
        >
          <span>
            <span>SERVICES</span>
          </span>
        </h2>
        <div class="grid-container">
          <div
            className="grid-item engineering"
            // style={{ "background-color": "#34759b" }}
          >
            {" "}
            <h3 style={{ color: "#FEFFFE" }}>
              {" "}
              <span>PRE-PLANNING/</span>
            </h3>
            <h3 style={{ color: "#FEFFFE" }}>
              {" "}
              <span>PROJECT</span>
            </h3>
            <h3 style={{ color: "#FEFFFE" }}>
              {" "}
              <span>ASSESSMENT</span>
            </h3>
            <a href="/">
              <span style={{ color: "#FEFFFE" }}>Read More</span>
            </a>
          </div>
          <div
            className="grid-item engineering "
            // style={{ "background-color": "#34759b" }}
          >
            {" "}
            <h3 style={{ color: "#0EA14E" }}>
              {" "}
              <span>ELECTRICAL</span>
            </h3>
            <h3 style={{ color: "#0EA14E" }}>
              {" "}
              <span>DESIGN</span>
            </h3>
            <a href="/">
              <span style={{ color: "#FEFFFE" }}>Read More</span>
            </a>
          </div>
          <div
            className=" grid-item engineering"
            // style={{ "background-color": "#34759b" }}
          >
            {" "}
            <h3 style={{ color: "#054970" }}>
              <span>CONSTRUCTION</span>
            </h3>
            <h3 style={{ color: "#0EA14E" }}>
              <span>SERVICES</span>
            </h3>
            <a href="/">
              <span style={{ color: "#FEFFFE" }}>Read More</span>
            </a>
          </div>
          <div
            className="grid-item engineering "
            // style={{ "background-color": "#34759b" }}
          >
            {" "}
            <h3 style={{ color: "#FEFFFE" }}>
              {" "}
              <span>BUILDING</span>
            </h3>
            <h3 style={{ color: "#FEFFFE" }}>
              {" "}
              <span>INFORMATION</span>
            </h3>
            <h3 style={{ color: "#FEFFFE" }}>
              {" "}
              <span>MODELING</span>
            </h3>
            <h3 style={{ color: "#FEFFFE" }}>
              {" "}
              <span>(BIM)</span>
            </h3>
            <a href="/">
              <span style={{ color: "#FEFFFE" }}>Read More</span>
            </a>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Services;
