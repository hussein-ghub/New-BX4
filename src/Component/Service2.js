import React from "react";
// import { HashLink } from "react-router-hash-link";
function Service2() {
  return (
    <div id="wraper">
      {/* <div
        className=""
        id="services"
        class="services section-padding"
        data-scroll-index="3"
      >
        <div class="container">
          <div class="row"> */}
      <div class="section-title text-center">
        <div className="ourWork">OUR WORK</div>
        <br />
      </div>
      {/* </div>
        </div>
      </div> */}

      <div>
        <div class="grid-container">
          <div class="grid-item transition">Web development</div>

          <div class="grid-item transition">Engineering</div>

          <div class="grid-item transition">Technology</div>

          <div class="grid-item transition">Precise Web Design</div>

          <div class="grid-item transition">Ecommerce Website</div>

          <div class="grid-item transition">Responsive Web Design</div>
        </div>
      </div>
      {/* <h3>
                Services<cite> .</cite>
              </h3> */}

      <section className="dinlinblock">
        <div id="section1">
          <div class="services-box box">
            <div class="icon">
              <i class="jam jam-brush"></i>
            </div>
            <div class="text">
              <h4 class="">Web design</h4>
              <p>
                Extreme attention to detail is the essence of our unique design
                concepts.
              </p>
            </div>
          </div>
        </div>
        <div id="section2" class="">
          <div class="services-box box">
            <div class="icon">
              <i class="jam jam-brush"></i>
            </div>
            <div class="text">
              <h4 class="">Engineering</h4>
              <p>
                Modeling with Autodesk Revit Software including electrical
                equipment and device assemblies, quantity, sizes, shape,
                location and proper orientation.
              </p>
            </div>
          </div>
        </div>
        <div id="section3" class="">
          <div class="services-box box">
            <div class="icon">
              <i class="jam jam-brush"></i>
            </div>
            <div class="text">
              <h4 class="">electrical Engineering</h4>
              <p>
                Lighting and Lighting Control System (Interior and Exterior)
                Medium Voltage and Low Voltage Power Distribution System Branch
                Circuiting Life Safety, Legally Required.
              </p>
            </div>
          </div>
        </div>

        <div id="section4" class="">
          <div class="services-box box">
            <div class="icon">
              <i class="jam jam-cogs"></i>
            </div>
            <div class="text">
              <h4 class="">Web development</h4>
              <p>
                Our development concepts give primarily attention to the goal,
                content, layouts and browser compatibility of the website to be
                on the air.
              </p>
            </div>
          </div>
        </div>

        {/* <div class="col-lg-4 col-md-6 mb-30"> 
            <div class="services-box box">
              <div class="icon">
                <i class="jam jam-camera"></i>
              </div>
              <div class="text">
                <h4 class="box-title mb-20">Photography</h4>
                <p>Extreme attention to detail is the essence of Roba’s uniquedesign concepts.</p>
              </div>
            </div>
          </div>   */}

        <div id="section5" class="">
          <div class="services-box box">
            <div class="icon">
              <i class="jam jam-phone"></i>
            </div>
            <div class="text">
              <h4 class="">Responsive Design</h4>
              <p>
                Mobile-feindly, Fexible, a better User Experience, improved
                loading time, and enhansed User Visibility in Search Engines,
                makes my design outstanding.
              </p>
            </div>
          </div>
        </div>

        <div id="section6" class="">
          <div class="services-box box">
            <div class="icon">
              <i class="jam jam-pie-chart"></i>
            </div>
            <div class="text">
              <h4 class="">Seo Friendly</h4>
              <p>
                Search engine opimization is a must in the essence of BX4'S
                design and development concepts.
              </p>
            </div>
          </div>
        </div>

        <div id="section7" class="">
          <div class="services-box box">
            <div class="icon">
              <i class="jam jam-wrench"></i>
            </div>
            <div class="text">
              <h4 class="">Support</h4>
              <p>
                {" "}
                We give entire support on maintaining a website, which includes
                updating, and making sure that the website runs smoothly as well
                as performs optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service2;
