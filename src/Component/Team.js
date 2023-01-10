import React from "react";
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Hussein from "../images/imrugrad1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in-up" className="bgcolor picolor marTop team">
      <div class="container">
        <div class="row">
          <div class="heading-title text-center marTop2">
            <h3 class="text-uppercase">Our Professionals </h3>
            <p class="p-top-30 half-txt texanim">
              <span className="text-success">Meet</span>&nbsp;
              <span>The</span>&nbsp;
              <span className="text-success">Team</span>&nbsp;
            </p>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={Img1} alt="team member" class="img-responsive" />
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Hi There !</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
                </div>
                <div class="s-link">
                  <a href="/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Betty</h5>
              <span>founder & ceo</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={Img1} alt="team member" class="img-responsive" />
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Hi There !</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
                </div>
                <div class="s-link">
                  <a href="/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Roba</h5>
              <span>HR Manager</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={Hussein} alt="team member" class="img-responsive" />
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Hi There !</h4>
                  <p>
                    I love to introduce myself as a Full Stack Web Developer and
                    Designer.
                  </p>
                </div>
                <div class="s-link">
                  <a href="/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Hussein</h5>
              <span>team-member</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={Img1} alt="team member" class="img-responsive" />
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Hi There !</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
                </div>
                <div class="s-link">
                  <a href="/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Kalkidane</h5>
              <span>team-member</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={Img2} alt="team member" class="img-responsive" />
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Hello World</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
                </div>
                <div class="s-link">
                  <a href="/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Lemlem</h5>
              <span>team-member</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={Img3} alt="team member" class="img-responsive" />
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>I love to design</h4>
                  <p>I love to introduce myself as a hardcore Web Designer.</p>
                </div>
                <div class="s-link">
                  <a href="/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Tirualem</h5>
              <span>team-member</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
