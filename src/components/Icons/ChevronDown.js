import * as React from "react";

function SvgChevronDown(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 8l7 7 7-7" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

export default SvgChevronDown;
