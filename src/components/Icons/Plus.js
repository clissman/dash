import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 6h2v12h-2V6z" fill="currentColor" />
      <path d="M6 11.096h12v2H6v-2z" fill="currentColor" />
    </svg>
  );
}

export default SvgPlus;
