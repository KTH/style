import { Component, h, Host, Prop, Element } from "@stencil/core";
import { HTMLStencilElement, State } from "@stencil/core/internal";

@Component({
  tag: "kth-tabs",
  styleUrl: "kth-tabs.scss",
  shadow: true,
})
export class KthTabs {
  @Prop() appearance: "primary" | "secondary" | "tertiary" | undefined;
  @Element() host: HTMLStencilElement;
  @State() panels: HTMLElement[];
  @State() currentIndex: number;
  tabs: HTMLElement;

  componentWillLoad() {
    this.panels = Array.from(this.host.querySelectorAll(":scope > kth-tab"));
    this.currentIndex = 0;
  }

  componentWillRender() {
    this.panels.forEach((panel) => {
      const currentPanel = this.panels[this.currentIndex];
      if (currentPanel.id === panel.id) {
        panel.hidden = false;
      } else {
        panel.hidden = true;
      }
    });
  }

  switchTab(newTabIndex: number) {
    this.currentIndex = newTabIndex;
    this.tabs.querySelectorAll("a").item(newTabIndex).focus();
  }

  handleClick = (event: MouseEvent, newTab: number) => {
    event.preventDefault();
    this.switchTab(newTab);
  };

  getDirection(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        return 1;
      case "ArrowLeft":
      case "ArrowUp":
        return -1;

      default:
        return 0;
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
    const direction = this.getDirection(event);
    const newIndex = this.currentIndex + direction;

    if (newIndex >= 0 && newIndex < this.panels.length) {
      this.switchTab(newIndex);
    }
  };

  render() {
    return (
      <Host>
        <ul ref={(e) => (this.tabs = e)}>
          {this.panels.map((t, i) => (
            <li>
              <a
                tabindex={i === this.currentIndex ? 0 : -1}
                aria-selected={i === this.currentIndex ? "true" : "false"}
                href={"#" + t.id}
                onClick={(event) => this.handleClick(event, i)}
                onKeyDown={this.handleKeyDown}
              >
                {t.getAttribute("title")}
              </a>
            </li>
          ))}
        </ul>
        <slot />
      </Host>
    );
  }
}
