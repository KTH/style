/**
 * Close all <dialog>s (modal and non-modal) in a document
 */
export function closeAllDialogs() {
  document.querySelectorAll("dialog").forEach((dialog) => dialog.close());
}

/**
 * Add mouse and keyboard event listeners to a menu panel (<dialog>)
 * @param dialog A <dialog> element
 */
export function addEventListeners(dialog: HTMLDialogElement) {
  const closeButton = dialog.querySelector(".kth-button.close");
  const backButton = dialog.querySelector(".kth-button.back");

  dialog.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dialog.close();
    }
  });

  if (closeButton instanceof HTMLButtonElement) {
    closeButton.addEventListener("click", () => {
      closeAllDialogs();
    });
  }

  if (backButton instanceof HTMLButtonElement) {
    // If the back button is inside a nested dialog, should be handled by the
    // inner dialog, not this one
    const closestDialog = backButton.closest("dialog");

    if (closestDialog?.isEqualNode(dialog)) {
      backButton.addEventListener("click", () => {
        dialog.close();
      });
    }
  }
}

export class MenuPanel {
  static init(container: HTMLElement | null, items: NodeListOf<Element>) {
    if (!container) return;

    for (const item of items) {
      if (!(item instanceof HTMLElement)) continue;

      const dialog = item.nextElementSibling;

      if (!(dialog instanceof HTMLDialogElement)) continue;

      addEventListeners(dialog);

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

  static initModal(items: NodeListOf<Element>) {
    for (const item of items) {
      if (!(item instanceof HTMLElement)) continue;

      const dialog = item.nextElementSibling;

      if (!(dialog instanceof HTMLDialogElement)) continue;

      addEventListeners(dialog);

      item.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.showModal();
      });
    }
  }
}
