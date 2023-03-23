import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "kth-tab",
  styleUrl: "kth-tab.scss",
  shadow: false,
})
export class KthTab {
  @Prop() id: string;

  render() {
    return (
      <Host role="tabpanel" aria-labelledby={`${this.id}-tab`}>
        <slot></slot>
      </Host>
    );
  }
}
