import React, { ButtonHTMLAttributes } from "react";

/** Props added by us included in all types of buttons */
interface CommonButtonProps {
  /** Appearance of the component */
  appearance: "primary" | "secondary" | "tertiary" | "success" | "danger";

  /** How large should the button be? */
  size?: "small" | "medium";
}

/** Props supported by the `BaseButton` component */
type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CommonButtonProps & {
    /** Does it have an icon? */
    withIcon: boolean;
  };

/** Props for `Button` component */
type ButtonProps = CommonButtonProps & {
  /** Label shown in the button */
  label: string;

  /** Function triggered on click */
  onClick?(): void;
};

/**
 * Base Primary UI component for user interaction
 *
 * Should not be used as it is, but extended
 */
export function BaseButton({
  appearance = "primary",
  size = "medium",
  withIcon,
  children,
  ...props
}: BaseButtonProps) {
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
}

/** Primary UI component for user interaction. Supports only text */
export function Button({
  label,
  onClick = () => {},
  size = "medium",
  appearance = "primary",
}: ButtonProps) {
  return (
    <BaseButton
      onClick={onClick}
      withIcon={false}
      size={size}
      appearance={appearance}
    >
      {label}
    </BaseButton>
  );
}
