import { DropdownWithPanel } from "@kth/style/react";

export function PersonalMenu() {
  return (
    <ul className="kth-personal-menu">
      <li>
        <DropdownWithPanel label="Mina kurser">
          <p>Lorem ipsum</p>
        </DropdownWithPanel>
      </li>
      <li>
        <DropdownWithPanel label="Undervisning">
          <p>Lorem ipsum</p>
        </DropdownWithPanel>
      </li>
    </ul>
  );
}
