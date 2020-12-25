import React from "react";
import Social from "../Home/Social";
import TuckerReisigDecember from "./TuckerReisigDecember.pdf";

function Footer() {
  const openResume = () => {
    window.open(TuckerReisigDecember);
  };

  return (
    <div className="outer-footer-div">
      <div className="nav-div footer-nav">
        <div className="main-div">
          <div className="sub-headers-div">
            <a className="header-anchors" href="#home">
              <span className="sub-headers"> Home </span>
            </a>
            <a className="header-anchors" href="#summer">
              <span className="sub-headers"> Experience </span>
            </a>
            <a className="header-anchors" href="#skills-outer">
              <span className="sub-headers"> Skills </span>
            </a>
            <a className="header-anchors" href="#projects">
              <span className="sub-headers"> Projects </span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <div className="hire-div">
          <h2 className="hire-h1">Want to know more?</h2>
          <p className="hire-p">
            Click{" "}
            <a className="hire-anchor" onClick={() => openResume()}>
              here
            </a>{" "}
            to view my resume!{" "}
          </p>
          {/* <button className="hire-btn" onClick={() => openResume()}>
            View Resume
          </button> */}
        </div>
        <div className="footer-social">
          <Social />
        </div>
        {/* <div className="footer-top">
          <a className="header-anchors hire-a" href="#home">
            <span> Back to the top ⬆️ </span>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
