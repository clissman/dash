import * as React from "react";

function SvgCheckmark(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 7l-4.346 5-4.346 5L5 13"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgCheckmark;
