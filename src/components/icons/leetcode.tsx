import type { SVGProps } from "react";

export function LeetcodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.851 3 4.63 12a2.06 2.06 0 0 0 0 2.965l5.555 5.421c.84.819 2.2.819 3.038 0L16 17.676" />
      <path d="m6.332 10.338 3.852-3.76a2.186 2.186 0 0 1 3.038 0l2.777 2.711" />
      <path d="M11 13h9" />
    </svg>
  );
}
