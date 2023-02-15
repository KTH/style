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
        <div className="container">
          <section className="group">
            <div className="group-name"></div>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

/** An item in the dropdown */
export function DropdownItem() {}

/** A group of items in a dropdown */
export function DropdownGroup() {}
