import React from "react";
import SvgDiv from "./SvgDiv";
import Arrow from "./Arrow";

function WelcomeText() {
  //       ⬇️
  return (
    <div className="welcome-div">
      <div className="left-home-text">
        <h1 className="welcome-text"> College Senior, Full Stack Developer </h1>
        <a href="#summer" style={{ textDecoration: "none" }}>
          <div className="meet-span">
            <Arrow /> Meet Tucker Reisig{" "}
          </div>
        </a>
      </div>
      <SvgDiv />
    </div>
  );
}

export default WelcomeText;
