import React from "react";

const CurvedBorder = ({
  fill = "#fff",
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 1440 137"
      className={`absolute  w-full ${className}`}
    >
      <path
        d="M0 137H1440V114.609H346.775C331.995 114.609 318.039 107.799 308.943 96.1501L248.278 18.4586C239.181 6.8092 225.225 0 210.445 0H0V137Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default CurvedBorder;
