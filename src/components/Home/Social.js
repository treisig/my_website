import React from "react";
import GitHub from "../../images/GitHub_logo.png";
import Linkedin from "../../images/linkedin_logo.png";

function Social() {
  return (
    <div className="social-div">
      <a href="https://github.com/treisig">
        <img src={GitHub} className="social-img" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/tucker-reisig">
        <img src={Linkedin} className="social-img" alt="Linkedin" />
      </a>
    </div>
  );
}

export default Social;
