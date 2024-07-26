import "@kth/style/scss/components/menu-item.scss";
import "@kth/style/scss/components/translation-panel.scss";
import "@kth/style/scss/utils/reset.scss";
import { DialogHTMLAttributes, useEffect, useRef, useState } from "react";
import { TranslationLink } from "./TranslationLink";
import { TranslationPanel } from "./TranslationPanel";

export interface TranslationProps
  extends DialogHTMLAttributes<HTMLDialogElement> {
  linkHref?: string;
  linkLabel: string;
  panelCloseText: string;
  noTranslationLabel: string;
  panelHref: string;
  panelLinkLabel: string;
}

export const Translation = ({
  linkHref,
  linkLabel,
  panelCloseText,
  noTranslationLabel,
  panelHref,
  panelLinkLabel,
}: TranslationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const handleClickOutside = (event: Event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {linkHref ? (
        <TranslationLink label={linkLabel} href={linkHref} />
      ) : (
        <>
          <TranslationLink
            label={linkLabel}
            onClick={() => setIsOpen(() => !isOpen)}
          />
          {isOpen && (
            <TranslationPanel
              closeFunction={() => setIsOpen(false)}
              closeText={panelCloseText}
              href={panelHref}
              linkLabel={panelLinkLabel}
              noTranslationLabel={noTranslationLabel}
              open={isOpen}
              ref={panelRef}
            />
          )}
        </>
      )}
    </>
  );
};
