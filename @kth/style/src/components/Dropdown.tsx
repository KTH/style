import React, { useState } from "react";
import { usePopper } from "react-popper";
import { ExpandMore } from "../icons";
import { BaseButton, type BaseButtonProps } from "./Button";

interface DropdownLinkProps {
  children?: React.ReactNode;
  href: string;
}

interface DropdownGroupProps {
  children?: React.ReactNode;
  label?: string;
}

interface DropdownProps {
  children?: React.ReactNode;
  label: string;
  size?: BaseButtonProps["size"];
  appearance: BaseButtonProps["appearance"];
}

/** Dropdown component with links */
export function Dropdown({
  children,
  label,
  size,
  appearance = "tertiary",
}: DropdownProps) {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          mainAxis: true,
          altAxis: true,
        },
      },
    ],
  });

  return (
    <>
      <BaseButton
        appearance={appearance}
        size={size}
        withIcon={true}
        ref={setReferenceElement}
      >
        <span>{label}</span>
        <ExpandMore />
      </BaseButton>
      <div
        className="kth-0-dropdown"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className="container">{children}</div>
      </div>
    </>
  );
}

/** An item in the dropdown */
export function DropdownLink({ href, children }: DropdownLinkProps) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

/** A group of items in a dropdown */
export function DropdownGroup({ children, label }: DropdownGroupProps) {
  return (
    <section className="group">
      <div className="group-name">{label}</div>
      <ul>{children}</ul>
    </section>
  );
}
