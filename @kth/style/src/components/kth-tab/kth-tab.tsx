import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "kth-tab",
  styleUrl: "kth-tab.scss",
  shadow: false,
})
export class KthTab {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
