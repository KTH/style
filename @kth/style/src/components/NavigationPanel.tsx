import React from "react";

/**
 * Add open/close functionality to a set of navigation panels
 *
 * @param container The element containing all the menus
 * @param items A list of all menu elements
 */
export function setNavigationPanels(
  container: HTMLElement | null,
  items: NodeListOf<Element>,
) {
  if (!container) {
    return;
  }

  function closeAllDialogs() {
    container?.querySelectorAll("dialog").forEach((dialog) => dialog.close());
  }

  for (const item of items) {
    if (!(item instanceof HTMLElement)) {
      continue;
    }

    const dialog = item.nextElementSibling;

    if (!(dialog instanceof HTMLDialogElement)) {
      continue;
      // throw new Error("Element adjacent to items must be a <dialog>");
    }

    item.addEventListener("click", (e) => {
      e.preventDefault();

      if (!dialog.open) {
        closeAllDialogs();
        dialog.show();
      } else {
        closeAllDialogs();
      }
    });
  }

  container.addEventListener("focusout", function (e) {
    console.log("Focus out!");
    const target = e.relatedTarget;

    if (target && target instanceof Node && !container.contains(target)) {
      closeAllDialogs();
    }
  });
}

export function NavigationPanel() {
  return <div>This is the React navigation panel</div>;
}
