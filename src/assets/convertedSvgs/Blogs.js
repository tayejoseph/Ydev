import * as React from "react";

function SvgBlogs(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={53} cy={53} r={53} fill="#5A80DC" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 62h30a3 3 0 003-3V40a3 3 0 00-3-3H38a3 3 0 00-3 3v19a3 3 0 003 3zm0-22h30v19H38V40z"
        fill="#fff"
      />
      <path
        d="M38 40v-.5h-.5v.5h.5zm30 0h.5v-.5H68v.5zm0 19v.5h.5V59H68zm-30 0h-.5v.5h.5V59zm0 3.5h30v-1H38v1zm30 0a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1zm3.5-3.5V40h-1v19h1zm0-19a3.5 3.5 0 00-3.5-3.5v1a2.5 2.5 0 012.5 2.5h1zM68 36.5H38v1h30v-1zm-30 0a3.5 3.5 0 00-3.5 3.5h1a2.5 2.5 0 012.5-2.5v-1zM34.5 40v19h1V40h-1zm0 19a3.5 3.5 0 003.5 3.5v-1a2.5 2.5 0 01-2.5-2.5h-1zM38 40.5h30v-1H38v1zm29.5-.5v19h1V40h-1zm.5 18.5H38v1h30v-1zm-29.5.5V40h-1v19h1zM33 65h40v3H33zM39.28 43.6h15v2h-15zM39.28 47.6h24v2h-24zM39.28 51.6h24v2h-24z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgBlogs;
