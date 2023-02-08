import React from "react";
import { ExpandMore } from "../icons";

export function DropdownButton() {
  return (
    <button className="kth-0-button">
      <div>Administrera kurs</div>
      <ExpandMore />
    </button>
  );
}

export function DropdownContainer() {
  return <div>TODO</div>;
}

export function DropdownGroup() {
  return <div>TODO</div>;
}

export function DropdownElement() {
  return <div>TODO</div>;
}

export function Dropdown() {
  return (
    <div className="kth-0-dropdown">
      <DropdownButton />
    </div>
  );
}
