import React from "react";
import "./Header.css";
import LOGO from "../../assets/images/logo.png";
function Header() {
  return (
    <header id="header" className="">
      <div className="container">
        <div className="logo float-left">
          <h1 className="text-light">
            <a href="#" className="scrollto">
              <span>
                <img src={LOGO} alt="logo" className="logo"/>
              </span>
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
