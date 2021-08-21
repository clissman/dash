import * as React from "react";

function SvgSearch(props) {
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
        d="M21 10a8 8 0 01-12.768 6.425L3 21.657l-1.414-1.414 5.202-5.202A8 8 0 1121 10zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearch;
