import * as React from "react";

function SvgStarOutline(props) {
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
        d="M12 4.302l1.919 4.614.117.281.305.025 4.98.4-3.795 3.25-.231.198.07.297 1.16 4.86-4.264-2.604-.261-.159-.26.16-4.265 2.604 1.16-4.86.07-.298-.232-.198-3.794-3.25 4.98-.4.305-.025.117-.281L12 4.301z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgStarOutline;
