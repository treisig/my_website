import React, { useRef } from "react";
import SvgDiv from "./SvgDiv";
import Arrow from "./Arrow";
import { useChain, useTransition, animated } from "react-spring";

function WelcomeText() {
  const h1Array = [
    <h1 className="welcome-text"> UNC Chapel Hill</h1>,
    <h1 className="welcome-text wide-h1"> Comp Sci Senior, </h1>,
    <h1 className="welcome-text"> Full Stack Developer </h1>,
    <div className="meet-span">
      <a href="#summer" className="name-anchor">
        <Arrow /> Meet Tucker Reisig{" "}
      </a>
    </div>,
  ];

  const h1_1 = useRef();
  const h1_2 = useRef();
  const h1_3 = useRef();
  const meet_span = useRef();

  const transitions1 = useTransition(h1Array[0], null, {
    from: { opacity: 0, transform: "translate3d(-5em,0px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    ref: h1_1,
  });

  const transitions2 = useTransition(h1Array[1], null, {
    from: { opacity: 0, transform: "translate3d(-5em,0px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    ref: h1_2,
  });
  const transitions3 = useTransition(h1Array[2], null, {
    from: { opacity: 0, transform: "translate3d(-5em,0px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    ref: h1_3,
  });

  const transitions4 = useTransition(h1Array[3], null, {
    from: { opacity: 0, transform: "translate3d(-5em,0px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    ref: meet_span,
  });

  useChain([h1_1, h1_2, h1_3, meet_span]);
  return (
    <div className="welcome-div">
      <div className="left-home-text">
        <animated.div>
          {transitions1.map(({ item, key, props }) => (
            <animated.div style={props}>{item}</animated.div>
          ))}
          {transitions2.map(({ item, key, props }) => (
            <animated.div style={props}>{item}</animated.div>
          ))}
          {transitions3.map(({ item, key, props }) => (
            <animated.div style={props}>{item}</animated.div>
          ))}
        </animated.div>
        {transitions4.map(({ item, key, props }) => (
          <animated.div style={props}>{item}</animated.div>
        ))}
      </div>
      <SvgDiv />
    </div>
  );
}

export default WelcomeText;
