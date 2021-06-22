import React from "react";
import CircularProgressbar from "react-circular-progressbar";

function Progressbar(props) {
  return (
    <CircularProgressbar
      percentage={props.percentage}
      text={props.text}
      strokeWidth={5}
      styles={{
        root: {},

        path: {
          stroke: "#f88",

          strokeLinecap: "butt",

          transition: "stroke-dashoffset 0.5s ease 0s",
        },

        trail: {
          stroke: "#d6d6d6",
        },

        text: {
          fill: "#f88",

          fontSize: "30px",
        },
      }}
    />
  );
}
export default Progressbar;
