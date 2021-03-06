import React from "react";
import "./Banner.css";
import ICON from "../../assets/images/intro-img.svg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <section id="hero" className="clearfix">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 intro-info order-md-first order-last">
            <h2>
              Quick Solution
              <br />
              for Your <span>Queries!</span>
            </h2>
            <div className="mobile-center">
              <Link
                className="btn btn-get-started scrollto"
                to="/form"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="col-md-6 intro-img order-md-last order-first">
            <img src={ICON} alt="intro img" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
