import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

function Progressbar(props) {
  return (
    <CircularProgressbar
      percentage={props.percentage}
      text={props.text}
      strokeWidth={3}
      styles={{
        root: {},

        path: {
          stroke: "#0086ffcc",

          strokeLinecap: "butt",

          transition: "stroke-dashoffset 0.5s ease 0s",
        },

        trail: {
          stroke: "#ffffffcc",
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
