import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../../../scss/reset.scss";
import {
  Dropdown,
  DropdownGroup,
  DropdownLink,
} from "../../../components/Dropdown";
import { LinkUl } from "../../../components/LinkList";
import "./Undervisning.scss";

function CourseAdminMenu() {
  return (
    <Dropdown
      label="Administrera kurs"
      id="administration"
      appearance="tertiary"
    >
      <LinkUl>
        <DropdownLink href="">Redigera introduktion till kursen</DropdownLink>
        <DropdownLink href="">Skapa och publicera kurs-PM</DropdownLink>
        <DropdownLink href="">Publicera ny kursanalys</DropdownLink>
        <DropdownLink href="">Kursvärdering</DropdownLink>
        <DropdownLink href="">Administrera assistenter</DropdownLink>
        <DropdownLink href="">Kursdeltagare</DropdownLink>
        <DropdownLink href="">Kursinformation i Kopps</DropdownLink>
      </LinkUl>
    </Dropdown>
  );
}

/**
 * Hypothetical example of "Undervisning" in Personal Menu
 */
export function CanvasRooms() {
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
    <>
      <div className="shortcuts">
        <div>Senaste kursrum i Canvas</div>
        <ul>
          {latestRooms.map((room) => (
            <li key={room}>
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
            <DropdownGroup
              label={year}
              id={`all-courserooms-${year}`}
              key={year}
            >
              {rooms.map((room, i) => (
                <DropdownLink key={i} href="">
                  {room}
                </DropdownLink>
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
            <DropdownGroup label={year} id={`all-examrooms-${year}`} key={year}>
              {rooms.map((room) => (
                <DropdownLink href="">{room}</DropdownLink>
              ))}
            </DropdownGroup>
          ))}
        </Dropdown>
      </div>
    </>
  );
}

export function ACourse() {
  return (
    <section
      className="kth-0-small kth-0-patterns-a-course"
      aria-labelledby="course-code course-name"
    >
      <div className="course-header">
        <h2 className="course-identifier">
          <div className="course-code" id="course-code">
            AA1234
          </div>
          <div className="course-name" id="course-name">
            Programmeringsteknik fekjlfkejf leakhjfkjlahkjf elkjfh akefhek j
          </div>
        </h2>
        <div className="course-links">
          <a href="#">Administrera om kursen</a>
          <CourseAdminMenu />
        </div>
      </div>
      <div className="course-canvas">
        <CanvasRooms />
      </div>
    </section>
  );
}

const meta = {
  title: "Patterns/KPM",
} satisfies Meta;

export default meta;
