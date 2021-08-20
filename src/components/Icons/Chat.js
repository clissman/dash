import * as React from "react";

function SvgChat(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 5a2 2 0 00-2 2v11a2 2 0 002 2h14.5l3.5 3V7a2 2 0 00-2-2H4z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgChat;
