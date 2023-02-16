import React from "react";

interface LinkUlProps {
  children: React.ReactNode;
}

interface LinkLiProps {
  children: React.ReactNode;
  href: string;
  size: "medium" | "small";
}

export function LinkUl({ children }: LinkUlProps) {
  return <ul className="kth-0-link-list">{children}</ul>;
}

export function LinkLi({ children, href, size = "medium" }: LinkLiProps) {
  // TODO. A11y: Set `aria-current="page"` if the current page is this link
  return (
    <li>
      <a className={size} href={href}>
        {children}
      </a>
    </li>
  );
}
