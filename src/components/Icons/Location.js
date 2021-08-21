import * as React from "react";

function SvgLocation(props) {
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
        d="M12 20S6.904 11.793 6.176 9.448C5.448 7.103 6.904 3 12 3s6.552 4.103 5.824 6.448C17.096 11.793 12 20 12 20zm0-9.694a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLocation;
