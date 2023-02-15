import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Appearance of the component */
  appearance: "primary" | "secondary" | "tertiary" | "success" | "danger";

  /** How large should the button be? */
  size?: "small" | "medium";

  /** Does it have an icon? */
  withIcon: boolean;
}

/**
 * Base Primary UI component for user interaction
 *
 * Should not be used as it is, but extended and limited somehow
 */
export const Button = ({
  appearance = "primary",
  size = "medium",
  withIcon,
  children,
  ...props
}: ButtonProps) => {
  const className = [
    "kth-0-button",
    appearance,
    size,
    withIcon ? "with-icon" : "",
  ].join(" ");
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
};
