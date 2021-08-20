import * as React from "react";

function SvgHamburger(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7h18V5H3v2zm18 6H3v-2h18v2zm0 6H3v-2h18v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHamburger;
