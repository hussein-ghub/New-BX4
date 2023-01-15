import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Industries from "./Component/Industries";
import Services from "./Component/Services";
import Leadership from "./Component/Leadership";
import Footer from "./Component/Footer";
import "./Style/master.css";
import Team from "./Component/Team";

import React from "react";
// import AnimatedCursor from "react-animated-cursor";
import ServiceBox from "./Component/ServiceBox";

function App() {
  return (
    <div>
      {/* <AnimatedCursor /> */}
      <div className="test">
        <Navbar />

        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
                <About />

                <ServiceBox />
                <Services />

                <Industries />
                <Team />
                <Leadership />
                <Contact />

                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />

                <ServiceBox />
                <Services />

                <Industries />
                <Team />
                <Leadership />
                <Contact />

                <Footer />
              </>
            }
          />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Industries" element={<Industries />} />
          <Route path="/ServiceBox" element={<ServiceBox />} />
          <Route
            path="Services/engineering & Technology"
            element={<Services />}
          />
          <Route
            path="services/responsive Web Devlopment"
            element={<ServiceBox />}
          />
          <Route path="services/Precise Web Design" element={<ServiceBox />} />
          <Route path="services/ecommerce Website" element={<ServiceBox />} />
          <Route path="/team" element={<Team />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
