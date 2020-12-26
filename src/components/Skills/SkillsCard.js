import React from "react";

function SkillsCard(props) {
  return (
    <div className="card">
      <img src={props.img} className="skills-img" alt="Skill Card" />
      <span className="subtitle-card">{props.subtitle}</span>
    </div>
  );
}

export default SkillsCard;
