import * as React from "react";

function SvgError(props) {
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
        d="M13.756 4.094a1.957 1.957 0 00-3.512 0L3.219 18.076C2.548 19.413 3.501 21 4.975 21h14.05c1.474 0 2.427-1.587 1.756-2.924L13.756 4.094zM11 14V8h2v6h-2zm0 4v-2h2v2h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgError;
