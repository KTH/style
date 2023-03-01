import React from "react";

/** Returns true if the `event` happened outside of the `container` */
function happenedOutside(event: MouseEvent, element: HTMLElement) {
  const target = event.target;

  if (target instanceof Node) {
    return !element.contains(target);
  }
}

/** Calls `callback` when the user has clicked outside of all the `elements` */
export function useClickOutside(
  elements: (HTMLElement | null)[],
  callback: () => void
) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const outsideClick = elements.every(
        (element) => element && happenedOutside(event, element)
      );

      if (outsideClick) {
        callback();
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, elements);
}
