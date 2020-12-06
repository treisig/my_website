import React, { useState } from "react";
import SkillsCard from "./SkillsCard";
import react_logo from "../../images/logo192.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useTransition, animated } from "react-spring";
import { debounce } from "@material-ui/core";

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

function Skills() {
  const [items, set] = useState(false);
  const enteringFromLeft = useTransition(items, null, {
    from: { transform: "translate3d(-90vw, 0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(0,0,0)" },
  });

  const enteringFromRight = useTransition(items, null, {
    from: { transform: "translate3d(90vw,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(0,0,0)" },
  });

  const [index, setIndex] = useState(0);

  const [isLeft, setIsLeft] = useState(false);

  const [current3, set3] = useState([
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

  return (
    <div className="wrapper-skills">
      <ArrowBackIcon className="arrows" onClick={() => leftChange()} />
      {/* <div> */}
      {!isLeft
        ? enteringFromLeft.map(({ item, props, key }) => (
            <animated.div style={props} className="skills-div" id="skills">
              {current3}
            </animated.div>
          ))
        : enteringFromRight.map(({ item, props, key }) => (
            <animated.div style={props} className="skills-div" id="skills">
              {current3}
            </animated.div>
          ))}
      {/* </div> */}

      <ArrowForwardIcon className="arrows" onClick={() => rightChange()} />
    </div>
  );
}

export default Skills;
