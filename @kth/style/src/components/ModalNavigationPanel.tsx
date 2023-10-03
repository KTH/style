/**
 * Close all <dialog>s (modal and non-modal) in a document
 */
function closeAllDialogs() {
  document.querySelectorAll("dialog").forEach((dialog) => dialog.close());
}

/**
 * Add open/close functionality to a set of navigation panels
 */
export function setModalNavigationPanels(items: NodeListOf<Element>) {
  for (const item of items) {
    if (!(item instanceof HTMLElement)) {
      continue;
    }

    const dialog = item.nextElementSibling;

    if (!(dialog instanceof HTMLDialogElement)) {
      continue;
    }

    dialog.addEventListener("keydown", (e) => {
      e.stopPropagation();

      if (e.key === "Escape") {
        dialog.close();
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

      // closeAllDialogs();
      dialog.showModal();
    });
  }
}
