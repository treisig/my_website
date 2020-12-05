import React from "react";

function Text(props) {
  return (
    <div className="left-text-div">
      <span className="subtitle">{props.subtitle}</span>
      <a className="anchors" href={props.title}>
        <h4 className="title">{props.title}</h4>
      </a>
      <p className="p-description"> {props.desc}</p>
    </div>
  );
}

export default Text;
