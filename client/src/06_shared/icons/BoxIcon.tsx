import { SVGProps } from "react";

export const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 4.5L8 1L1 4.5V11.5L8 15L15 11.5V4.5Z"
      stroke="#B9B9B9"
      stroke-linejoin="round"
    />
    <path
      d="M11.5 2.75L4.5 6.25M1 4.5L8 8L1 4.5ZM8 15V8V15ZM15 4.5L8 8L15 4.5Z"
      stroke="#B9B9B9"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
