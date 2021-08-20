import * as React from "react";

function SvgSuccessOutline(props) {
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
        d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-6.382-3.85l-4.961 4.96-2.127-2.127-1.414 1.414 2.834 2.835.707.707.707-.707 5.668-5.668-1.414-1.415z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSuccessOutline;
