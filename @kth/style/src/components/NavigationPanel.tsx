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
    }

    dialog.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllDialogs();
      }
    });

    const closeButton = dialog.querySelector(".close");

    if (closeButton instanceof HTMLButtonElement) {
      closeButton.addEventListener("click", () => {
        closeAllDialogs();
      });
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
    const target = e.relatedTarget;

    if (target && target instanceof Node && !container.contains(target)) {
      closeAllDialogs();
    }
  });
}
