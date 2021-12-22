import * as React from "react";

function SvgChecked(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={13.998}
        cy={14.498}
        r={13.415}
        fill="#fff"
        stroke="#D0D0D0"
        strokeWidth={1.167}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.817 10.82a.672.672 0 00-.95 0l-6.696 6.697-4.007-4.007a.672.672 0 00-.95.95l4.482 4.482a.672.672 0 00.95 0l7.171-7.171a.672.672 0 000-.95z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgChecked;
