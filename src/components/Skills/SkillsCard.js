import React from "react";

function SkillsCard(props) {
  return (
    <div className="card">
      {/* <div className="card-logo"> */}
      <img src={props.img} className="skills-img" alt="Skill Card" />
      {/* </div> */}
      {/* <p className="subtitle-card">{props.subtitle}</p> */}
      <span className="subtitle-card">{props.subtitle}</span>

      {/* <p className="p-description">{props.desc}</p> */}
    </div>
  );
}

export default SkillsCard;
