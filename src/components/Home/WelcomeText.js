import React from "react";
import SvgDiv from "./SvgDiv";

function WelcomeText() {
  return (
    <div className="welcome-div">
      <div className="left-home-text">
        <h1 className="welcome-text"> College Senior, Full Stack Developer </h1>
        <p className="meet-span"> ⬇️ Meet Tucker Reisig </p>
      </div>
      <SvgDiv />
    </div>
  );
}

export default WelcomeText;
