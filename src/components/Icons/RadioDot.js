import * as React from "react";

function SvgRadioDot(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} r={8} fill="currentColor" />
    </svg>
  );
}

export default SvgRadioDot;
