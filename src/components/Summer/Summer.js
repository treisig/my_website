import React from "react";
import LeftText from "./LeftText";
import summer_of_code from "../../images/summer_of_code.png";

function Summer() {
  return (
    <div className="summer-div" id="summer">
      <LeftText />
      <img src={summer_of_code} className="right-img" alt="Summer of Code" />
      <div className="triangle-div">
        <div className="triangle"></div>
      </div>
    </div>
  );
}

export default Summer;
