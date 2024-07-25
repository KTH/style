import "@kth/style/scss/components/alert.scss";
import "@kth/style/scss/utils/reset.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  /**
   * The variant sets the color and icon for the alert.
   */
  variant: "info" | "warning" | "success";
  /**
   * Informative content. Should only use <p> tags.
   */
  children: ReactNode;
  /**
   * Optional title.
   */
  title?: string;
  /**
   * Determines if a h2, h3 or h4 tag is rendered for the title.
   */
  headingLevel?: 2 | 3 | 4;
}

export const Alert = ({
  variant,
  children,
  title,
  headingLevel,
  ...props
}: ButtonProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`kth-alert ${variant}`} {...props}>
      {title && headingLevel && <HeadingTag>{title}</HeadingTag>}
      {children}
    </div>
  );
};
