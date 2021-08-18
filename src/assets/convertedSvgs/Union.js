import * as React from "react";

function SvgUnion(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={53} cy={53} r={53} fill="#051A26" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.619 48.28l7.14 3.57 7.14-3.57V34h-14.28v14.28zM30 60.89L37.567 73l12.11-7.567.001-8.42-7.568-3.69L30 60.89zm45.775 0L68.207 73l-12.11-7.567v-8.42l7.567-3.69 12.11 7.567z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgUnion;
