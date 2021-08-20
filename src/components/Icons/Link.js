import * as React from "react";

function SvgLink(props) {
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
        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7H4V6h7V4z"
        fill="currentColor"
      />
      <path
        d="M14 4V2h8v2h-.002v6.001h-2V5.416L14.415 11 13 9.586 18.586 4H14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLink;
