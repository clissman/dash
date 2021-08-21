import * as React from "react";

function SvgStarFill(props) {
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
        d="M12 3l2.38 5.723 6.18.496-4.708 4.033 1.438 6.03L12 16.05l-5.29 3.231 1.438-6.03L3.44 9.22l6.18-.496L12 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarFill;
