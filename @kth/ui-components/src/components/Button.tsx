import "@kth/style/scss/components/button.scss";
import "@kth/style/scss/utils/reset.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant sets the color of the button. For some variants, it also sets an icon.
   */
  variant?: "primary" | "secondary" | "success" | "error" | "previous" | "next";
  /**
   * Button contents
   */
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={`kth-button ${variant}`} {...props}>
      {children}
    </button>
  );
};
