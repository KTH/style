import React from "react";

interface ButtonProps {
  /**
   * Appearance of the component
   */
  appearance: "primary" | "secondary" | "tertiary" | "success" | "danger";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  appearance = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const className = ["kth-0-button", appearance, size].join(" ");
  return (
    <button type="button" className={className} {...props}>
      {label}
    </button>
  );
};
