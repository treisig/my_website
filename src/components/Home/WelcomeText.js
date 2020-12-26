import React from "react";
import SvgDiv from "./SvgDiv";
import Arrow from "./Arrow";

function WelcomeText() {
  //       ⬇️
  return (
    <div className="welcome-div">
      <div className="left-home-text">
        <h1 className="welcome-text"> College Senior, Full Stack Developer </h1>

        <div className="meet-span">
          <a href="#summer" className="name-anchor">
            <Arrow /> Meet Tucker Reisig{" "}
          </a>
        </div>
      </div>
      <SvgDiv />
    </div>
  );
}

export default WelcomeText;
