import React from "react";

function Text(props) {
  return (
    <div className="left-text-div">
      <span className="subtitle">{props.subtitle}</span>
      <h4 className="title">{props.title}</h4>
      <p className="p-description"> {props.desc}</p>
    </div>
  );
}

export default Text;
