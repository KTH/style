/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

const Ctx = React.createContext({
  closeAllPanels: () => {},
});

/**
 * A panel with a button that opens it.
 *
 * - `children` is mounted the first time the dialog is opened. It is _not_
 *   unmounted after the dialog is closed.
 */
export function PersonalMenuPanel({ label, children }) {
  const [shouldRender, setShouldRender] = React.useState(false);
  const closeAllPanels = React.useContext(Ctx).closeAllPanels;
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  function handleOpen() {
    closeAllPanels();
    setShouldRender(true);
    dialogRef.current?.show();
  }

  function handleClose() {
    closeAllPanels();
  }

  return (
    <>
      <div>
        <button className="kth-header-menu-item dropdown" onClick={handleOpen}>
          {label}
        </button>
      </div>
      <dialog className="kth-header-panel" ref={dialogRef}>
        <div className="kth-header-panel__container">
          <button className="kth-button close" onClick={handleClose}>
            <span className="visually-hidden">Close</span>
          </button>
          <div className="kth-header-panel__content">
            {shouldRender && children}
          </div>
        </div>
      </dialog>
    </>
  );
}

interface PersonalMenuPanelGroupProps {
  children: React.ReactElement;
}

/**
 * Contains all <PersonalMenuPanel /> components in a menu
 */
export function PersonalMenuPanelGroup({
  children,
}: PersonalMenuPanelGroupProps) {
  function closeAllPanels() {
    document.querySelectorAll("dialog").forEach((dialog) => dialog.close());
  }

  function handleBlur(e: React.FocusEvent) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      closeAllPanels();
    }
  }

  return (
    <div onBlur={handleBlur}>
      <Ctx.Provider value={{ closeAllPanels }}>{children}</Ctx.Provider>
    </div>
  );
}
