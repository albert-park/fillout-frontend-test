import { memo } from "react";
import { SVGProps } from "./hand-wave";
import { v4 as uuidv4 } from "uuid";

const File = memo(({ width = 16, height = 16, fill = "#666" }: SVGProps) => {
  const fileId = uuidv4();
  return (
    <svg
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      aria-labelledby={fileId}
    >
      <path
        d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z"
        clipRule="evenodd"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
});

export default File;
