import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "kth-button",
  styleUrl: "kth-button.scss",
  shadow: false,
})
export class KthButton {
  @Prop() appearance: "primary" | "secondary" | "tertiary" | undefined;

  render() {
    // TODO: set the "kth-0" prefix in one place
    const className = this.appearance ? `kth-0-${this.appearance}` : "";

    return (
      <button class={className}>
        <slot></slot>
      </button>
    );
  }
}
