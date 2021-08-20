import * as React from "react";

function SvgIndeterminate(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="currentColor" strokeWidth={2} d="M4 13h16" />
    </svg>
  );
}

export default SvgIndeterminate;
