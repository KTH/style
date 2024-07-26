import "@kth/style/scss/components/translation-panel.scss";
import "@kth/style/scss/components/visually-hidden.scss";
import "@kth/style/scss/components/translation-panel.scss";
import "@kth/style/scss/utils/reset.scss";
import { DialogHTMLAttributes, forwardRef } from "react";

export interface TranslationPanelProps
  extends DialogHTMLAttributes<HTMLDialogElement> {
  closeText: string;
  noTranslationLabel: string;
  href: string;
  linkLabel: string;
  closeFunction: () => void;
}

export const TranslationPanel = forwardRef<
  HTMLDialogElement,
  TranslationPanelProps
>(
  (
    { closeText, noTranslationLabel, href, linkLabel, closeFunction, ...props },
    ref,
  ) => {
    return (
      <dialog className="kth-translation" ref={ref} {...props}>
        <div className="kth-translation__content">
          <button
            className="kth-icon-button close"
            onClick={() => closeFunction()}
          >
            <span className="kth-visually-hidden">{closeText}</span>
          </button>
          <span>{noTranslationLabel}</span>
          <a href={href}>{linkLabel}</a>
        </div>
      </dialog>
    );
  },
);
