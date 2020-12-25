import React from "react";
import { useSpring, animated } from "react-spring";

function Arrow() {
  // taken from https://codesandbox.io/embed/8ypj5vq6m9

  const interp = (i) => (r) =>
    `translate3d(0, ${6 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI, reset: true });
    },
    from: { radians: 0 },
    config: { duration: 1500 },
    reset: true,
  });

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width="114"
      height="174"
      viewBox="0 0 114 174"
      className="arrow-svg"
      style={{ transform: radians.interpolate(interp(0)) }}
    >
      <g id="Group_8" data-name="Group 8" transform="translate(-548 -602)">
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width="52"
          height="99"
          transform="translate(579 602)"
          fill="#f7c008"
        />
        <path
          id="Polygon_19"
          data-name="Polygon 19"
          d="M57,0l57,82H0Z"
          transform="translate(662 776) rotate(180)"
          fill="#f7c008"
        />
      </g>
    </animated.svg>
  );
}

export default Arrow;
