import * as React from "react";

function SvgChevronLeft(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

export default SvgChevronLeft;
