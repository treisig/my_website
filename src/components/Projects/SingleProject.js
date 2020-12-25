import React from "react";
import ImagePanel from "./ImagePanel";
import Text from "./Text";

function SingleProject(props) {
  // text on left side
  if (props.right) {
    return (
      <div className="proj-div text-on-right">
        <ImagePanel pic={props.pic} pic_class={props.pic_class} />
        <Text desc={props.desc} title={props.title} subtitle={props.subtitle} />
      </div>
    );
  }

  if (props.two) {
    return (
      <div className="proj-div">
        <Text desc={props.desc} title={props.title} subtitle={props.subtitle} />
        <div className="two-pic">
          <ImagePanel pic={props.pic} pic_class={props.pic_class} />
          <ImagePanel
            pic={props.two}
            pic_class={`${props.pic_class} pic-two`}
          />
        </div>
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
