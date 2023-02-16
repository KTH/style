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
  id: string;
}

interface DropdownProps {
  children?: React.ReactNode;
  label: string;
  size?: BaseButtonProps["size"];
  appearance: BaseButtonProps["appearance"];
  id: string;
}

/** Dropdown component with links */
export function Dropdown({
  children,
  label,
  size,
  appearance = "tertiary",
  id,
}: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
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
        aria-controls={id}
        aria-expanded={expanded}
        appearance={appearance}
        size={size}
        withIcon={true}
        ref={setReferenceElement}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{label}</span>
        <ExpandMore />
      </BaseButton>
      {expanded && (
        <div
          id={id}
          className="kth-0-dropdown"
          ref={setPopperElement}
          style={styles.popper}
          onKeyDown={(event) => {
            if (event.defaultPrevented) {
              return;
            }

            if (event.key === "Escape") {
              referenceElement?.focus();
              setExpanded(false);
            }
          }}
          {...attributes.popper}
        >
          <div className="container">{children}</div>
        </div>
      )}
    </>
  );
}

/** An item in the dropdown */
export function DropdownLink({ href, children }: DropdownLinkProps) {
  // TODO. A11y: Sets `aria-current="page"` if the current page is this link
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

/** A group of items in a dropdown */
export function DropdownGroup({ children, label, id }: DropdownGroupProps) {
  return (
    <section className="group" aria-labelledby={id}>
      <div className="group-name" id={id}>
        {label}
      </div>
      <ul>{children}</ul>
    </section>
  );
}
