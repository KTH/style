import React, { useState } from "react";
import { usePopper } from "react-popper";
import { BaseButton } from "./Button";

const DropdownContext = React.createContext("");

/** Dropdown component with links */
export function Dropdown({ children }: { children?: React.ReactNode }) {
  // - Dropdown button
  // - Popper.js-powered area
  // - A backdrop when the menu is shown in small screens
  // - List of groups and items

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
export function DropdownLink() {
  return (
    <li>
      <a href="#">Link 1</a>
    </li>
  );
}

/** A group of items in a dropdown */
export function DropdownGroup({ children }: { children?: React.ReactNode }) {
  return (
    <section className="group">
      <div className="group-name"></div>
      <ul>{children}</ul>
    </section>
  );
}
