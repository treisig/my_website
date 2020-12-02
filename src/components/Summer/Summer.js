import React from "react";
import LeftText from "./LeftText";
import summer_of_code from "../../images/summer_of_code.png";

function Summer() {
  return (
    <div className="summer-div">
      <LeftText />
      {/* <div className="right-img-div"> */}
      <img src={summer_of_code} className="right-img" />
      {/* </div> */}
      <div className="triangle-div">
        <div className="triangle"></div>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="567.807"
        height="567.807"
        viewBox="0 0 567.807 567.807"
        className="tri-svg"
      >
        <path
          id="Polygon_18"
          data-name="Polygon 18"
          d="M183.695,47.976c11.388-20.769,41.223-20.769,52.611,0l159.337,290.6A30,30,0,0,1,369.337,383H50.663a30,30,0,0,1-26.305-44.423Z"
          transform="translate(270.822) rotate(45)"
          fill="#f7c008"
          opacity="0.171"
        />
      </svg> */}
    </div>
  );
}

export default Summer;
