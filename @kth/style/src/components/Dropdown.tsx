import React, { useState } from "react";
import { usePopper } from "react-popper";
import { BaseButton } from "./Button";

const DropdownContext = React.createContext("");

/** Dropdown component with links */
export function Dropdown() {
  // - Dropdown button
  // - Popper.js-powered area
  // - A backdrop when the menu is shown in small screens
  // - List of groups and items

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <>
      <button ref={setReferenceElement}>
        Xklfjalkfjalksjflk asfklajs laksjf
      </button>
      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
}

/** An item in the dropdown */
export function DropdownItem() {}

/** A group of items in a dropdown */
export function DropdownGroup() {}
