import React from "react";
import {
  Dropdown,
  DropdownGroup,
  DropdownLink,
} from "../../components/Dropdown";
import "./Undervisning.scss";
/**
 * Hypothetical example of "Undervisning" in Personal Menu
 */
export function Undervisning() {
  const latestRooms = ["VT23 (50681)", "VT22 (65109)", "VT21 (23333)"];
  const allCourseRooms = [
    { year: "2023", rooms: ["VT23 (11111)", "VT23 (11111)"] },
    { year: "2022", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2021", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2020", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2019", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2018", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
  ];

  const allExamRooms = [
    { year: "2023", rooms: ["VT23 (11111)", "VT23 (11111)"] },
    { year: "2022", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2021", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2020", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2019", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
    { year: "2018", rooms: ["VT22 (11111)", "VT22 (11111)", "VT22 (11111)"] },
  ];

  return (
    <div className="kth-0-patterns-undervisning">
      <div className="shortcuts">
        <div>Senaste kursrum i Canvas</div>
        <ul>
          {latestRooms.map((room) => (
            <li>
              <a href="#">{room}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="all-rooms kth-0-small">
        <Dropdown
          appearance="tertiary"
          id="all-courserooms"
          label="Alla kursrum"
        >
          {allCourseRooms.map(({ year, rooms }) => (
            <DropdownGroup label={year} id={`all-courserooms-${year}`}>
              {rooms.map((room) => (
                <DropdownLink href="">{room}</DropdownLink>
              ))}
            </DropdownGroup>
          ))}
        </Dropdown>
        <Dropdown
          appearance="tertiary"
          id="all-examrooms"
          label="Alla examinationsrum"
        >
          {allExamRooms.map(({ year, rooms }) => (
            <DropdownGroup label={year} id={`all-examrooms-${year}`}>
              {rooms.map((room) => (
                <DropdownLink href="">{room}</DropdownLink>
              ))}
            </DropdownGroup>
          ))}
        </Dropdown>
      </div>
    </div>
  );
}
