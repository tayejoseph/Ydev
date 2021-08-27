import * as React from "react";

function SvgCustomBox(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 129 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1h127.5v85H1V1z" stroke="#EFEFEF" strokeWidth={0.885} />
      <path
        d="M1 1h42.5v85H1V1zm56.667 14.167h56.666v56.666H57.667V15.167z"
        stroke="#EFEFEF"
        strokeWidth={0.885}
      />
      <path
        d="M8.084 9.854h28.333v.885H8.084v-.885zm0 6.197h21.25v.886H8.084v-.886zm0 11.51h28.333v.886H8.084v-.885zm0 6.199h21.25v.885H8.084v-.885z"
        fill="#EFEFEF"
      />
      <path
        d="M8.084 45.272h28.333v21.25H8.084v-21.25z"
        stroke="#EFEFEF"
        strokeWidth={0.885}
      />
    </svg>
  );
}

export default SvgCustomBox;
