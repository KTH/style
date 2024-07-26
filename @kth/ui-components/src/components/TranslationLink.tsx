import "@kth/style/scss/components/translation-panel.scss";
import "@kth/style/scss/components/menu-item.scss";
import "@kth/style/scss/utils/reset.scss";
import { AnchorHTMLAttributes } from "react";

export interface TranslationLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  label: string;
}

export const TranslationLink = ({
  href,
  label,
  ...props
}: TranslationLinkProps) => {
  return (
    <a href={href} {...props} className="kth-menu-item language">
      {label}
    </a>
  );
};
