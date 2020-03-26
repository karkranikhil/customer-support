import React from "react";
import "./Submission.css";
import TICK from "../../assets/images/tick.png";
import { Link } from "react-router-dom";
function Submission() {
  return (
    <section id="hero" className="clearfix">
      <div className="container d-flex h-100">
        <div className="d-flex justify-content-center align-self-center w-100">
          <div class="box">
            <h1>Query Submitted Successfully !!</h1>
            <div class="d-flex">
              <div>
                <img src={TICK} alt="logo" className="tick-logo" />
              </div>
              <div>
                <p>
                  Check the confirmation email in your inbox with your service
                  request number.
                </p>
                <p>
                  A technical support engineer will respond to you with in
                  approximately 24 to 48 hours.
                </p>
              </div>
            </div>
            <div className="button-box">
              <Link to="/" className="btn btn-get-started btn-home">
                Back to Home page
              </Link>
              <Link to="/form" className="btn btn-get-started">
                Submit new query
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Submission;
