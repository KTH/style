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
    }
    /**
     * Base component for tabs. This component is not intended to be used directly.
     */
    interface KthTabs {
        "appearance": "primary" | "secondary" | "tertiary" | undefined;
        "url": "query" | "hash" | undefined;
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
    /**
     * Base component for tabs. This component is not intended to be used directly.
     */
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
    }
    /**
     * Base component for tabs. This component is not intended to be used directly.
     */
    interface KthTabs {
        "appearance"?: "primary" | "secondary" | "tertiary" | undefined;
        "url"?: "query" | "hash" | undefined;
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
            /**
             * Base component for tabs. This component is not intended to be used directly.
             */
            "kth-tabs": LocalJSX.KthTabs & JSXBase.HTMLAttributes<HTMLKthTabsElement>;
        }
    }
}
