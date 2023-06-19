import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25em"
    height="1.25em"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="m10 16-6-6 6-6 1.063 1.063L6.875 9.25H16v1.5H6.875l4.188 4.188L10 16Z"
    />
  </svg>
);
export default SvgArrowBack;
