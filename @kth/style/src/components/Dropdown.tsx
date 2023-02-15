import React from "react";
import { Button } from "./Button";

const DropdownContext = React.createContext("");

/** Dropdown component with links */
export function Dropdown() {
  // - Dropdown button
  // - Popper.js-powered area
  // - A backdrop when the menu is shown in small screens
  // - List of groups and items

  return <Button appearance="tertiary" label="X" />;
}

/** An item in the dropdown */
export function DropdownItem() {}

/** A group of items in a dropdown */
export function DropdownGroup() {}
