import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25em"
    height="1.25em"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.23 14.063 4.707 10.52 5.75 9.479l2.48 2.459 6.02-6L15.292 7l-7.063 7.063Z"
    />
  </svg>
);
export default SvgCheck;
