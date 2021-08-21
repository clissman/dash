import * as React from "react";

function SvgWarning(props) {
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
        d="M8.464 16.95L7.05 15.534l8.486-8.485 1.414 1.414-8.486 8.485z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWarning;
