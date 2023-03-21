import { Component, h } from "@stencil/core";

@Component({
  tag: "kth-button",
  styleUrl: "kth-button.scss",
  shadow: false,
})
export class KthButton {
  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
