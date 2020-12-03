import React from "react";

function SkillsCard(props) {
  return (
    <div className="card">
      <div className="card-logo">
        <img src={props.img} alt="Skill Card" />
      </div>
      <p className="subtitle-card">{props.subtitle}</p>
      <p className="p-description">{props.desc}</p>
    </div>
  );
}

export default SkillsCard;
