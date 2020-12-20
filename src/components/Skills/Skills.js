import React, { useState, useRef } from "react";
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

// import node_logo from "../../images/nodejs-logo.png";
import node_logo from "../../images/nodejs-logo2.png";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useTransition, useSpring, useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { debounce } from "@material-ui/core";
import clamp from "lodash-es/clamp";

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
  <SkillsCard
    img={react_logo}
    subtitle="Bro"
    desc={`Proficient development skills both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="Bro"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="Bro"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
];

const diff_set = [
  <SkillsCard
    img={react_logo}
    subtitle="C"
    desc={`Proficient development skills both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="C"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="C"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="C"
    desc={`Proficient development skills both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="C"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
  <SkillsCard
    img={react_logo}
    subtitle="C"
    desc={`Proficient development skills in React Js in both class based and functional based React Js.`}
  />,
];

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
  const [items, set] = useState(false);
  const [brotest, setbrotest] = useState(0);
  // const enteringFromLeft = useTransition(items, null, {
  //   from: { transform: "translate3d(-90vw, 0,0)" },
  //   enter: { transform: "translate3d(0,0,0)" },
  //   leave: { transform: "translate3d(90vw,0,0)" },
  //   // config: { duration: 500 },
  // });

  // const enteringFromRight = useTransition(items, null, {
  //   from: { transform: "translate3d(90vw,0,0)" },
  //   enter: { transform: "translate3d(0,0,0)" },
  //   leave: { transform: "translate3d(0,0,0)" },
  // });

  // const brobro = useTransition(items, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   // config: { duration: 1200 },
  // });

  const [index, setIndex] = useState(0);

  const [isLeft, setIsLeft] = useState(false);

  const [current3, set3] = useState([
    card_array[0],
    card_array[1],
    card_array[2],
    card_array[0],
    card_array[1],
    card_array[2],
  ]);

  // const handleSearchChange = debounce(() => {}, 250);

  const leftChange = debounce(() => {
    let current = 0;
    if (index === 0) {
      setIndex(card_array.length - 3);
      current = card_array.length - 3;
    } else {
      current = index - 3;
      setIndex(index - 3);
    }
    set3([
      card_array[current],
      card_array[current + 1],
      card_array[current + 2],
    ]);
    setIsLeft(true);
    set(!items);
  }, 250);

  const rightChange = debounce(() => {
    let current;
    if (index === card_array.length - 3) {
      setIndex(0);
      current = 0;
    } else {
      current = index + 3;
      setIndex(index + 3);
    }
    set3([
      card_array[current],
      card_array[current + 1],
      card_array[current + 2],
    ]);
    setIsLeft(false);
    set(!items);
  }, 250);

  const [{ x }, testing] = useSpring(() => ({ x: 0 }));

  // const [{O}]

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx], direction: [xDir] }) => {
    testing({ x: down ? mx : 0 });
    console.log(xDir);
    if (down) {
      setbrotest(mx);
    }
  });

  return (
    // <div className="wrapper-skills">
    //   <ArrowBackIcon className="arrows" onClick={() => leftChange()} />
    //   {!isLeft
    //     ? brobro.map(({ item, props, key }) => (
    //         <animated.div style={props} className="skills-div" id="skills">
    //           {current3}
    //         </animated.div>
    //       ))
    //     : enteringFromRight.map(({ item, props, key }) => (
    //         <animated.div style={props} className="skills-div" id="skills">
    //           {current3}
    //         </animated.div>
    //       ))}
    //   <ArrowForwardIcon className="arrows" onClick={() => rightChange()} />
    // </div>

    <div className="wrapper-skills">
      {/* <animated.div
        style={{ x, touchAction: "none" }}
        className="skills-div"
        id="skills"
        {...bind()}
      >
        {proficient_skills}
      </animated.div>

      <animated.div
        style={{ x, touchAction: "none" }}
        className="skills-div"
        id="skills-inter"
        {...bind()}
      >
        {inter_skills}
      </animated.div> */}

      <div className="temp">
        {/* <p>Proficient</p> */}
        <h2>Proficient</h2>

        <div className="skills-div" id="skills">
          {proficient_skills}
        </div>
      </div>

      <div className="temp inter">
        <h2>Intermediate</h2>
        <div className="skills-div" id="skills-inter">
          {inter_skills}
        </div>
      </div>
    </div>
  );
}

export default Skills;
