import * as React from "react";

function SvgBrain(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 46 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#Brain_svg__pattern0)" d="M.704 0h44.928v55.948H.704z" />
      <defs>
        <pattern
          id="Brain_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#Brain_svg__image0"
            transform="matrix(.0125 0 0 .01004 0 .098)"
          />
        </pattern>
        <image
          id="Brain_svg__image0"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgBrain;