/**
 * Close all <dialog>s (modal and non-modal) in a document
 */
export function closeAllDialogs() {
  document.querySelectorAll("dialog").forEach((dialog) => dialog.close());
}

/**
 * Add basic mouse and keyboard event listeners to a dialog (<dialog>)
 * @param dialog A <dialog> element
 */
export function addEventListeners(dialog: HTMLDialogElement) {
  const closeButton = dialog.querySelector(".kth-icon-button.close");

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
}

/**
 * Add mouse and keyboard event listeners to a dialog (<dialog>) that is not a modal
 * @param dialog A <dialog> element
 * @param button Button or clickable element used to open the dialog
 */
export function addNonModalEventListeners(
  dialog: HTMLDialogElement,
  button: HTMLElement,
) {
  addEventListeners(dialog);

  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (!dialog.open) {
      closeAllDialogs();
      dialog.show();
    } else {
      closeAllDialogs();
    }
  });
}

/**
 * Add mouse and keyboard event listeners to a modal (<dialog>)
 * @param modal A <dialog> element
 * @param previousModal A <dialog> element that was clicked to open the current modal
 */
export function addModalEventListeners(
  modal: HTMLDialogElement,
  button: HTMLElement,
  previousModal?: HTMLDialogElement | null,
) {
  const backButton = modal.querySelector(".kth-button.back");

  addEventListeners(modal);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    closeAllDialogs();
    modal.showModal();
  });

  // Close dialog if clicking outside of it
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeAllDialogs();
    }
  });

  // Close the current modal and open the previous modal with a back button
  if (backButton instanceof HTMLButtonElement) {
    backButton.addEventListener("click", () => {
      modal.close();
      if (previousModal) {
        previousModal.showModal();
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

      addNonModalEventListeners(dialog, item);
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

    addModalEventListeners(modal, button);
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

      addModalEventListeners(modal, item, previousModal);
    }
  }

  static initTranslationModal(button: Element | null, modal: Element | null) {
    if (!(button instanceof HTMLElement)) return;
    if (!(modal instanceof HTMLDialogElement)) return;

    // Only open the modal if there is no href
    if (!button.getAttribute("href")) {
      addNonModalEventListeners(modal, button);

      // Close the modal if clicking outside the modal
      document.addEventListener("click", (e) => {
        if (
          modal.open &&
          !e.composedPath().includes(button) &&
          !e.composedPath().includes(modal)
        ) {
          e.preventDefault();
          closeAllDialogs();
        }
      });
    }
  }
}
