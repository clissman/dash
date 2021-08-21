import * as React from "react";

function SvgCirclePlusFill(props) {
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
        d="M12 22.124c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm1-11v-4h-2v4H7v2h4v4h2v-4h4v-2h-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCirclePlusFill;
