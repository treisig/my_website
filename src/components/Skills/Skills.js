import React from "react";
import SkillsCard from "./SkillsCard";
import react_logo from "../../images/logo192.png";
import js_logo from "../../images/JavaScript-logo.png";
import html_css from "../../images/html_logo.png";
import python_logo from "../../images/python-logo.png";
import db_logo from "../../images/db-logo.png";
import firebase_logo from "../../images/firebase-logo.png";
import git_logo from "../../images/git-logo.png";
import mongo_logo from "../../images/mongo-logo.png";
import jquery_logo from "../../images/jquery-logo.png";
import c_logo from "../../images/c-logo.png";
import xd_logo from "../../images/xd-logo.png";
import node_logo from "../../images/nodejs-logo2.png";

const proficient_skills = [
  <SkillsCard img={js_logo} subtitle="JavaScript" />,
  <SkillsCard img={react_logo} subtitle="React Js" />,
  <SkillsCard img={html_css} subtitle="HTML/CSS" />,
  <SkillsCard img={python_logo} subtitle="Python" />,
  <SkillsCard img={db_logo} subtitle="SQL/NoSQL" />,
  <SkillsCard img={firebase_logo} subtitle="Firebase" />,
];

const inter_skills = [
  <SkillsCard img={node_logo} subtitle="Node Js" />,
  <SkillsCard img={git_logo} subtitle="Git/GitHub" />,
  <SkillsCard img={mongo_logo} subtitle="MongoDB" />,
  <SkillsCard img={jquery_logo} subtitle="jQuery" />,
  <SkillsCard img={c_logo} subtitle="C" />,
  <SkillsCard img={xd_logo} subtitle="Adobe XD" />,
];

function Skills() {
  return (
    <div className="wrapper-skills" id="skills-outer">
      <div className="skills-flex">
        <h2>Proficient</h2>

        <div className="skills-div" id="skills">
          {proficient_skills}
        </div>
      </div>

      <div className="skills-flex inter">
        <h2>Intermediate</h2>
        <div className="skills-div" id="skills-inter">
          {inter_skills}
        </div>
      </div>
    </div>
  );
}

export default Skills;
