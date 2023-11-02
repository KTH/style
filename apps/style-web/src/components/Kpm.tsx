import { PersonalMenu } from "./PersonalMenu";
import { DropdownContainer } from "@kth/style/react";

export function Kpm() {
  return (
    <DropdownContainer className="kth-kpm">
      <div className="kth-kpm__container">
        <nav className="kth-entrances" aria-label="Ingångar">
          <ul>
            <li>
              <a className="kth-menu-item" href="https://kth.se">
                <span>kth.se</span>
              </a>
            </li>
            <li>
              <a className="kth-menu-item" href="https://kth.se/student">
                <span>Studentwebben</span>
              </a>
            </li>
            <li>
              <a
                className="kth-menu-item"
                href="https://intra.kth.se"
                aria-current="true"
              >
                <span>Intranät</span>
              </a>
            </li>
          </ul>
        </nav>
        <PersonalMenu />
      </div>
    </DropdownContainer>
  );
}
