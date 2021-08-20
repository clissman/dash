import * as React from "react";

function SvgCirclePlusOutline(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 10.977v-4h-2v4H7v2h4v4h2v-4h4v-2h-4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11.977c0 5.523-4.477 10-10 10s-10-4.477-10-10c0-5.522 4.477-10 10-10s10 4.478 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCirclePlusOutline;
