import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25em"
    height="1.25em"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="m10 16.075-1.227-1.227 3.983-3.983h-8.83v-1.73h8.83L8.773 5.152 10 3.925 16.075 10 10 16.075Z"
    />
  </svg>
);
export default SvgArrowForward;
