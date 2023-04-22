import { Component, h, Host, Element } from "@stencil/core";

@Component({
  tag: "kth-tab",
  styleUrl: "kth-tab.scss",
  shadow: false,
})
export class KthTab {
  @Element() el!: HTMLElement;

  render() {
    return (
      <Host role="tabpanel" aria-labelledby={`${this.el.id}-tab`}>
        <slot></slot>
      </Host>
    );
  }
}
