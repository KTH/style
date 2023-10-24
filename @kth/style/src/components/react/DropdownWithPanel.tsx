import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DropdownWithPanel({ label, children }: Props) {
  const [shouldRender, setShouldRender] = React.useState(false);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  return (
    <div>
      <button
        className="kth-menu-item dropdown"
        onClick={() => {
          setShouldRender(true);
          dialogRef.current?.show();
        }}
        onMouseOver={() => setShouldRender(true)}
        onFocus={() => setShouldRender(true)}
      >
        {label}
      </button>
      <dialog className="kth-menu-panel" ref={dialogRef}>
        {shouldRender && children}
      </dialog>
    </div>
  );
}
