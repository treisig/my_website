import React from "react";

function ImagePanel(props) {
  return (
    <div className="proj-image-div">
      <img
        src={props.pic}
        alt="Project"
        className={`${props.pic_class} all-proj-pics`}
      />
    </div>
  );
}

export default ImagePanel;
