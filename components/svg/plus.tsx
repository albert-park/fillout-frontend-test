import { memo } from "react";
import { SVGProps } from "./hand-wave";
import { v4 as uuidv4 } from "uuid";

const Plus = memo(({ width = 22, height = 22, fill = "none" }: SVGProps) => {
  const plusId = uuidv4();
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={plusId}
    >
      <g filter="url(#a)">
        <path d="M3 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#fff" />
        <path
          d="M11 2.25a7.75 7.75 0 1 1 0 15.5 7.75 7.75 0 0 1 0-15.5Z"
          stroke="#E1E1E1"
          strokeWidth=".5"
        />
        <g clipPath="url(#b)">
          <path
            d="M11 7.167V10m0 0v2.833M11 10H8.167M11 10h2.833"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="b">
          <path fill="#fff" transform="translate(7 6)" d="M0 0h8v8H0z" />
        </clipPath>
        <filter
          id="a"
          x="0"
          y="0"
          width="22"
          height="22"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_25" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend
            in2="effect1_dropShadow_1_25"
            result="effect2_dropShadow_1_25"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1_25"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
});

export default Plus;
