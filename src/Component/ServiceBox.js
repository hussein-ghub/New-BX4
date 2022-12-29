import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function ServiceBox() {
  return (
    <div>
      <section id="services" class="section gray-bg">
        <div class="container">
          <div class="row justify-content-center sm-m-25px-b m-45px-b">
            <div class="col-md-12 col-lg-8">
              <div class="section-title text-center pt-4 mt-3">
                <h2 class="dark-color pt-5 pb-4">
                  <span class="theme-color">OUR</span> SERVICES
                </h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1 text-cente p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                <div class="f-icon theme-color m-10px-b">
                  <i class="icon-desktop"></i>
                </div>
                <div class="feature-content">
                  <h6 class="dark-color font-w-700 m-15px-b">
                    Web Development
                  </h6>
                  <p class="m-0px">
                    Our development concepts give primarily attention to the
                    goal, content, layouts and browser compatibility of the
                    website to be on the air.
                  </p>
                  <a href="/">
                    <span className="" style={{ color: "#FEFFFE" }}>
                      Read More
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                <div class="f-icon theme-color m-10px-b">
                  <i class="icon-layers"></i>
                </div>
                <div class="feature-content">
                  <h6 class="dark-color font-w-700 m-15px-b">
                    Web &amp; Design
                  </h6>
                  <p class="m-0px">
                    Extreme attention to detail is the essence of our unique
                    design concepts.
                  </p>
                  <a href="/">
                    <span style={{ color: "#FEFFFE" }}>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                <div class="f-icon theme-color m-10px-b">
                  <i class="icon-hotairballoon"></i>
                </div>
                <div class="feature-content">
                  <h6 class="dark-color font-w-700 m-15px-b">
                    Fully Responsive
                  </h6>
                  <p class="m-0px">
                    Mobile-feindly, Fexible, a better User Experience, improved
                    loading time, and enhansed User Visibility in Search
                    Engines, makes our design outstanding.
                  </p>
                  <a href="/">
                    <span style={{ color: "#FEFFFE" }}>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                <div class="f-icon theme-color m-10px-b">
                  <i class="icon-mobile"></i>
                </div>
                <div class="feature-content">
                  <h6 class="dark-color font-w-700 m-15px-b">
                    Responsive Web Design
                  </h6>
                  <p class="m-0px">
                    Interactive, easily customizable, highly modern, fast
                    loading.
                  </p>
                  <a href="/">
                    <span style={{ color: "#FEFFFE" }}>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                <div class="f-icon theme-color m-10px-b">
                  <i class="icon-tools-2"></i>
                </div>
                <div class="feature-content">
                  <h6 class="dark-color font-w-700 m-15px-b">Seo Friendly</h6>
                  <p class="m-0px">
                    Search engine opimization is a must in the essence of BX4'S
                    design and development concepts.
                  </p>
                  <a href="/">
                    <span style={{ color: "#FEFFFE" }}>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                <div class="f-icon theme-color m-10px-b">
                  <i class="icon-scissors"></i>
                </div>
                <div class="feature-content">
                  <h6 class="dark-color font-w-700 m-15px-b">Support</h6>
                  <p class="m-0px">
                    We give entire support on maintaining a website, which
                    includes updating, and making sure that the website runs
                    smoothly as well as performs optimally.
                  </p>
                  <a href="/">
                    <span style={{ color: "#FEFFFE" }}>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceBox;
