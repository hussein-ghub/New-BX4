import React from "react";
// import "../Style/about.css";

function Services() {
  return (
    <div className="Services container-fluid">
      <center>
        <h2
          style={{
            " font-size": "55px",
            color: "#D8D8D8",
            "letter-spacing": "0.06em",
          }}
        >
          <span>
            <span>SERVICES</span>
          </span>
        </h2>
        <div class="grid-container">
          <div className="grid-item" style={{ "background-color": "#000000" }}>
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
              <span>Read More</span>
            </a>
          </div>
          <div
            className="grid-item  "
            style={{ "background-color": "#605E5E" }}
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
              <span>Read More</span>
            </a>
          </div>
          <div
            className=" grid-item "
            style={{ "background-color": "#EDEDED" }}
          >
            {" "}
            <h3 style={{ color: "#0EA14E" }}>
              <span>CONSTRUCTION</span>
            </h3>
            <h3 style={{ color: "#0EA14E" }}>
              <span>SERVICES</span>
            </h3>
            <a href="/">
              <span>Read More</span>
            </a>
          </div>
          <div
            className="grid-item  "
            style={{ "background-color": "#0EA14E" }}
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
              <span>Read More</span>
            </a>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Services;
