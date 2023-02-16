import React, { ButtonHTMLAttributes } from "react";

/** Props added by us included in all types of buttons */
interface CommonButtonProps {
  /** Appearance of the component */
  appearance: "primary" | "secondary" | "tertiary" | "success" | "danger";

  /** How large should the button be? */
  size?: "small" | "medium";
}

/** Props supported by the `BaseButton` component */
export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
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
export const BaseButton = React.forwardRef(function _BaseButton(
  {
    appearance = "primary",
    size = "medium",
    withIcon,
    children,
    ...props
  }: BaseButtonProps,
  ref: React.LegacyRef<HTMLButtonElement>
) {
  const className = [
    "kth-0-button",
    appearance,
    `kth-0-${size}`,
    withIcon ? "with-icon" : "",
  ].join(" ");

  return (
    <button ref={ref} type="button" className={className} {...props}>
      {children}
    </button>
  );
});

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
