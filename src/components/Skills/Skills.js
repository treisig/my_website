import React from "react";
import SkillsCard from "./SkillsCard";
import react_logo from "../../images/logo192.png";

const card_array = [
  <SkillsCard
    img={react_logo}
    subtitle="React"
    desc={`Proficient development skills both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="React"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="React"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
];

function Skills() {
  return (
    <div className="skills-div">
      <SkillsCard
        img={react_logo}
        subtitle="React"
        desc={`Proficient development skills both class based and functional based React Js.`}
      />
      <SkillsCard
        img={react_logo}
        subtitle="React"
        desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
      />
      <SkillsCard
        img={react_logo}
        subtitle="React"
        desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
      />
    </div>
  );
}

export default Skills;
