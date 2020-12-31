import React from "react";
import SvgDiv from "./SvgDiv";
import Arrow from "./Arrow";

function WelcomeText() {
  //       ⬇️
  return (
    <div className="welcome-div">
      <div className="left-home-text">
        {/* <h1 className="welcome-text">
          {" "}
          UNC Chapel Hill Computer Science Senior, Full Stack Developer{" "}
        </h1> */}
        <h1 className="welcome-text"> UNC Chapel Hill</h1>
        <h1 className="welcome-text wide-h1"> Comp Sci Senior, </h1>
        <h1 className="welcome-text"> Full Stack Developer </h1>

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
