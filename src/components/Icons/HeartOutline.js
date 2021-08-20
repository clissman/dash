import * as React from "react";

function SvgHeartOutline(props) {
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
        d="M2.513 5.882C-.002 11.14 7.306 17.972 12 21c4.694-3.027 12.002-9.86 9.487-15.118-1.042-2.18-3.106-3.05-5.043-2.855C14.132 3.26 12 5.882 12 5.882S9.868 3.26 7.556 3.027c-1.938-.196-4.001.676-5.043 2.855z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgHeartOutline;
