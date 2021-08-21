import * as React from "react";

function SvgPageLeft(props) {
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
        d="M7 20V4H5v16h2zM17.293 4.293l-7 7-.707.707.707.707 7 7 1.414-1.414L12.414 12l6.293-6.293-1.414-1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPageLeft;
