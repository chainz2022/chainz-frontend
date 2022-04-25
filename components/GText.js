import React from "react";

const GText = props => {
  return (
    <svg className="border-2 relative w-[12rem] h-[2rem]" viewBox="0 0 100 100">
      <linearGradient id="gr-simple">
        <stop stop-color="rgba(0,0,0,1)" offset="0%" />
        <stop stop-color="hsl(320, 100%, 50%)" offset="100%" />
      </linearGradient>
      <text x="0" y="0" dy="3rem" dx="-100%" class="text">
        {props.children}
      </text>
    </svg>
  );
};

export default GText;
