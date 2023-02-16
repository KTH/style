import React from "react";

interface LinkUlProps {
  children: React.ReactNode;
  size?: "medium" | "small" | "";
}

interface LinkLiProps {
  children: React.ReactNode;
  href: string;
}

export function LinkUl({ children, size = "" }: LinkUlProps) {
  const className = ["kth-0-link-list", `kth-0-${size}`].join(" ");
  return <ul className={className}>{children}</ul>;
}

export function LinkLi({ children, href }: LinkLiProps) {
  // TODO. A11y: Set `aria-current="page"` if the current page is this link
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
