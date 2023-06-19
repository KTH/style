import React from "react";
import ArrowBack from "../icons/400/ArrowBack";
import ArrowForward from "../icons/500/ArrowForward";

interface ButtonProps {
  /** The label of the button */
  children?: string;

  /** The callback function when the button is clicked */
  onClick?: () => void;

  /** Appearance */
  appearance: "primary" | "secondary" | "tertiary";
}

interface IconButtonProps {
  /** The label of the button */
  children?: string;

  /** The callback function when the button is clicked */
  onClick?: () => void;
}

/** A button with just text */
export function Button({ children, onClick, appearance }: ButtonProps) {
  const className = ["kth-button", appearance].join(" ");

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export function BackButton({ children, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className="kth-button tertiary">
      <ArrowBack />
      {children}
    </button>
  );
}

export function ForwardButton({ children, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className="kth-button primary">
      {children}
      <ArrowForward />
    </button>
  );
}

// export function NextButton() {}
