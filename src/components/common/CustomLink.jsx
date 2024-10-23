import React from "react";
import Link from "next/link";

const CustomLink = ({ to, children, className = "", ...props }) => {
  return (
    <Link
      href={to}
      className={`dm-sans-font text-body  transition-colors ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
