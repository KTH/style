import { Component, h, Host, Prop, Element } from "@stencil/core";
import { HTMLStencilElement, State } from "@stencil/core/internal";

/**
 * Base component for tabs. This component is not intended to be used directly.
 */
@Component({
  tag: "kth-tabs",
  styleUrl: "kth-tabs-base.scss",
  shadow: true,
})
export class KthTabsBase {
  // This component is based on the following article:
  // https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
  @Prop() appearance: "primary" | "secondary" | "tertiary" | undefined;
  @Prop() url: "query" | "hash" | undefined;
  @Element() host: HTMLStencilElement;
  @State() panels: HTMLElement[];
  @State() currentIndex: number;
  tabs: HTMLElement;

  componentWillLoad() {
    const url = new URL(window.location.href);
    let currentPanelId = "";

    switch (this.url) {
      case "query":
        currentPanelId = url.searchParams.get(this.host.id);
        break;
      case "hash":
        currentPanelId = url.hash.slice(1);
        break;
    }

    this.panels = Array.from(this.host.querySelectorAll(":scope > kth-tab"));
    this.currentIndex =
      currentPanelId === ""
        ? 0
        : this.panels.findIndex((p) => p.id === currentPanelId);
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
    // TODO: set the "kth-0" prefix in one place
    const className = [
      "tab-container",
      this.appearance ? `kth-0-${this.appearance}` : "",
    ].join(" ");

    return (
      <Host>
        <div class={className}>
          <ul role="tablist" ref={(e) => (this.tabs = e)}>
            {this.panels.map((t, i) => (
              <li role="presentation">
                <a
                  id={`${t.id}-tab`}
                  role="tab"
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
        </div>
        <slot />
      </Host>
    );
  }
}
