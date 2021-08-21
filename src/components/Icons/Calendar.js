import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 14h3v3h-3v-3z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4V2H4v2a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2V2h-2v2H6zM4 9h16v9H4V9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendar;
