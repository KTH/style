import React, { useState } from "react";
import { usePopper } from "react-popper";
import { BaseButton } from "./Button";

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
}

/** Dropdown component with links */
export function Dropdown({ children }: DropdownProps) {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <>
      <BaseButton
        appearance="tertiary"
        withIcon={false}
        ref={setReferenceElement}
      >
        Xklfjalkfjalksjflk asfklajs laksjf
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
