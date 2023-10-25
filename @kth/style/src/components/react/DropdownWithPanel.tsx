import React, { KeyboardEvent } from "react";
import { closeAllDialogs } from "../MenuPanel";

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DropdownWithPanel({ label, children }: Props) {
  const [shouldRender, setShouldRender] = React.useState(false);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      event.stopPropagation();
      dialogRef.current?.close();
    }
  }

  return (
    <div>
      <button
        className="kth-menu-item dropdown"
        onClick={() => {
          setShouldRender(true);

          if (!dialogRef.current?.open) {
            closeAllDialogs();
            dialogRef.current?.show();
          } else {
            closeAllDialogs();
          }
        }}
        onMouseOver={() => setShouldRender(true)}
        onFocus={() => setShouldRender(true)}
      >
        <span>{label}</span>
      </button>
      <dialog
        className="kth-menu-panel"
        ref={dialogRef}
        onKeyDown={handleKeyDown}
      >
        <div className="kth-menu-panel__container">
          <button className="kth-button close" onClick={() => closeDialog()}>
            <span className="kth-visually-hidden">Close</span>
          </button>
          <div className="kth-menu-panel__content">
            {shouldRender && children}
          </div>
        </div>
      </dialog>
    </div>
  );
}

export function DropdownContainer(props: React.HTMLAttributes<HTMLDivElement>) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      onBlur={(event) => {
        const relatedTarget = event.relatedTarget;

        if (relatedTarget && !containerRef.current?.contains(relatedTarget)) {
          closeAllDialogs();
        }
      }}
      {...props}
    />
  );
}
