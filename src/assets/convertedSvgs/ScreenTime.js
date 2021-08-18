import * as React from "react";

function SvgScreenTime(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 54 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        fill="url(#ScreenTime_svg__pattern0)"
        d="M.385 0h52.958v65.948H.385z"
      />
      <defs>
        <pattern
          id="ScreenTime_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#ScreenTime_svg__image0"
            transform="matrix(.01042 0 0 .00836 0 .098)"
          />
        </pattern>
        <image
          id="ScreenTime_svg__image0"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgScreenTime;