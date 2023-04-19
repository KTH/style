/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KthButton {
        "appearance": "primary" | "secondary" | "tertiary" | undefined;
    }
    interface KthTab {
        "id": string;
    }
    interface KthTabs {
        "appearance": "primary" | "secondary" | "tertiary" | undefined;
        "size": "small" | "medium" | undefined;
    }
}
declare global {
    interface HTMLKthButtonElement extends Components.KthButton, HTMLStencilElement {
    }
    var HTMLKthButtonElement: {
        prototype: HTMLKthButtonElement;
        new (): HTMLKthButtonElement;
    };
    interface HTMLKthTabElement extends Components.KthTab, HTMLStencilElement {
    }
    var HTMLKthTabElement: {
        prototype: HTMLKthTabElement;
        new (): HTMLKthTabElement;
    };
    interface HTMLKthTabsElement extends Components.KthTabs, HTMLStencilElement {
    }
    var HTMLKthTabsElement: {
        prototype: HTMLKthTabsElement;
        new (): HTMLKthTabsElement;
    };
    interface HTMLElementTagNameMap {
        "kth-button": HTMLKthButtonElement;
        "kth-tab": HTMLKthTabElement;
        "kth-tabs": HTMLKthTabsElement;
    }
}
declare namespace LocalJSX {
    interface KthButton {
        "appearance"?: "primary" | "secondary" | "tertiary" | undefined;
    }
    interface KthTab {
        "id"?: string;
    }
    interface KthTabs {
        "appearance"?: "primary" | "secondary" | "tertiary" | undefined;
        "size"?: "small" | "medium" | undefined;
    }
    interface IntrinsicElements {
        "kth-button": KthButton;
        "kth-tab": KthTab;
        "kth-tabs": KthTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kth-button": LocalJSX.KthButton & JSXBase.HTMLAttributes<HTMLKthButtonElement>;
            "kth-tab": LocalJSX.KthTab & JSXBase.HTMLAttributes<HTMLKthTabElement>;
            "kth-tabs": LocalJSX.KthTabs & JSXBase.HTMLAttributes<HTMLKthTabsElement>;
        }
    }
}
