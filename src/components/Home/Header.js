import React from "react";
import Social from "./Social";

function Header() {
  return (
    <div className="nav-div">
      <div className="main-div">
        <div className="name-div">
          <a className="header-anchors" href="#home">
            <span className="name"> Tucker Reisig </span>
          </a>
        </div>
        <div className="sub-headers-div">
          <a className="header-anchors" href="#summer">
            <span className="sub-headers"> Experience </span>
          </a>
          <a className="header-anchors" href="#skills">
            <span className="sub-headers"> Skills </span>
          </a>
          <a className="header-anchors" href="#projects">
            <span className="sub-headers"> Projects </span>
          </a>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default Header;
