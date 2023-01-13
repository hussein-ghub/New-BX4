import React from "react";
// import "./Home.css";
// import Product from "./Product";
// import { useEffect, useRef } from "react";
// import webp from "../images/webDesign.jpg";
import bg from "../images/responsive.jpg";
import bg1 from "../images/electrical.jpg";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const fadeImages = [
    // {
    //   url: `${webp}`,
    //   caption: "",
    // },
    {
      url: `${bg}`,
      caption: "",
    },
    {
      url: `${bg1}`,
      caption: "",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="home__container">
      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img className="slide__images" src={fadeImage.url} alt="" />
              </div>
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>

      {/* <div id="wraper">
        <div class="grid-container">
          <div class="grid-item">Responsive Web Devlopment</div>
          <div class="grid-item">Engineering</div>
          <div class="grid-item">Technology</div>
          <div class="grid-item">Precise Web Design</div>
          <div class="grid-item">Ecommerce Website</div>
          <div class="grid-item">& more</div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
