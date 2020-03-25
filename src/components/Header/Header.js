import React from "react";
import "./Header.css";

function Header() {
  return (
    <header id="header" className="">
      <div className="container">
        <div className="logo float-left">
          <h1 className="text-light">
            <a href="#" className="scrollto">
              <span>Help Center</span>
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
