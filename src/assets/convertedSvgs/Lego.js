import * as React from "react";

function SvgLego(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 56 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#Lego_svg__pattern0)" d="M0 0h56v69.736H0z" />
      <defs>
        <pattern
          id="Lego_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Lego_svg__image0" transform="scale(.01887 .01515)" />
        </pattern>
        <image
          id="Lego_svg__image0"
          width={53}
          height={66}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgLego;
