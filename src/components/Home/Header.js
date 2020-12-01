import React from "react";
import Social from "./Social";

function Header() {
  return (
    <div className="nav-div">
      <div className="main-div">
        <div className="name-div">
          <span className="name"> Tucker Reisig </span>
        </div>
        <div className="sub-headers-div">
          <span className="sub-headers"> Experience </span>
          <span className="sub-headers"> Skills </span>
          <span className="sub-headers"> Projects </span>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default Header;
