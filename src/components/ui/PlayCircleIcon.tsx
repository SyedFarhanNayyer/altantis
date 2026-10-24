import type { SVGProps } from "react";

// Outline play button. Takes the surrounding text colour; the stroke keeps
// a fixed width so it stays crisp at small sizes.
export function PlayCircleIcon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" aria-hidden="true" {...props}>
      <path
        d="M49.5 27C49.5 39.4264 39.4264 49.5 27 49.5C14.5736 49.5 4.5 39.4264 4.5 27C4.5 14.5736 14.5736 4.5 27 4.5C39.4264 4.5 49.5 14.5736 49.5 27ZM24.1484 35.3421L34.7697 28.5141C35.5536 28.0102 35.9455 27.7582 36.0809 27.4379C36.1992 27.1579 36.1992 26.8421 36.0809 26.5621C35.9455 26.2418 35.5536 25.9898 34.7697 25.4859L24.1484 18.6579C23.245 18.0772 22.7934 17.7868 22.4199 17.8135C22.0944 17.8367 21.795 18.0002 21.5994 18.2614C21.375 18.5612 21.375 19.0981 21.375 20.172V33.828C21.375 34.9019 21.375 35.4388 21.5994 35.7386C21.795 35.9998 22.0944 36.1633 22.4199 36.1865C22.7934 36.2132 23.245 35.9228 24.1484 35.3421Z"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
