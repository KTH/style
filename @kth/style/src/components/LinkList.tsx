import React from "react";

interface LinkUlProps {
  children: React.ReactNode;
}

interface LinkLiProps {
  children: React.ReactNode;
  href: string;
}

export function LinkUl({ children }: LinkUlProps) {
  return <ul className="kth-0-link-list">{children}</ul>;
}

export function LinkLi({ children, href }: LinkLiProps) {
  // TODO. A11y: Set `aria-current="page"` if the current page is this link
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
