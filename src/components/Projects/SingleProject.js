import React from "react";
import ImagePanel from "./ImagePanel";
import Text from "./Text";

function SingleProject(props) {
  // text on left side
  if (props.right) {
    return (
      <div className="proj-div">
        <ImagePanel />
        <Text subtitle={props} />
      </div>
    );
  }

  return (
    <div className="proj-div">
      <Text desc={props.desc} title={props.title} subtitle={props.subtitle} />
      <ImagePanel pic={props.pic} pic_class={props.pic_class} />
    </div>
  );
}

export default SingleProject;
