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
export function addEventListeners(
  dialog: HTMLDialogElement,
  previousDialog?: HTMLDialogElement | null,
) {
  const closeButton = dialog.querySelector(".kth-icon-button.close");
  const backButton = dialog.querySelector(".kth-button.back");

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeAllDialogs();
    }
  });

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
    backButton.addEventListener("click", () => {
      dialog.close();
      if (previousDialog) {
        previousDialog.showModal();
      }
    });
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

  static initModal(button: Element | null, modal: Element | null) {
    if (!(button instanceof HTMLElement)) return;
    if (!(modal instanceof HTMLDialogElement)) return;

    addEventListeners(modal);

    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.showModal();
    });
  }

  static initModals(
    items: NodeListOf<Element>,
    previousModal?: Element | null,
  ) {
    if (previousModal && !(previousModal instanceof HTMLDialogElement)) return;

    for (const item of items) {
      if (!(item instanceof HTMLElement)) continue;

      const dataId = item.getAttribute("data-id");
      const modal = document.querySelector(
        `.kth-mobile-menu[data-id='${dataId}']`,
      );

      if (!(modal instanceof HTMLDialogElement)) return;

      addEventListeners(modal, previousModal);

      item.addEventListener("click", (e) => {
        e.preventDefault();

        closeAllDialogs();
        modal.showModal();
      });
    }
  }
}
