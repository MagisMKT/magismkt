import React from "react";

const Arrow = ({ fillColor = "#ffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M10.4 0.5L10.4 20.5M10.4 20.5L0.800049 10.9M10.4 20.5L20 10.9"
        stroke={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
