import { Component, Host, Listen, State, h, Element } from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";
import {
  getCurrentTabFromUrl,
  getNewIndex,
  switchPanel,
} from "../../utils/tabs";

@Component({
  tag: "kth-tabs-navigation",
  styleUrl: "kth-tabs-navigation.scss",
  shadow: true,
})
export class KthTabsNavigation {
  // This component is based on the following article:
  // https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html
  @Element() host: HTMLStencilElement;
  @State() panels: HTMLElement[];
  @State() currentIndex: number;
  tabs: HTMLElement;

  @Listen("popstate", { target: "window" })
  initializeTab() {
    this.currentIndex = getCurrentTabFromUrl(this.host.id, this.panels);
  }

  componentWillLoad() {
    this.panels = Array.from(this.host.querySelectorAll(":scope > kth-tab"));
    this.initializeTab();
  }

  componentWillRender() {
    switchPanel(this.panels, this.currentIndex);
  }

  switchTab(newTabIndex: number) {
    this.currentIndex = newTabIndex;
    this.tabs.querySelectorAll("button").item(newTabIndex).focus();

    const panelId = this.panels[newTabIndex].id;
    const newUrl = `?${this.host.id}=${panelId}`;

    window.history.pushState(undefined, "", newUrl);
  }

  handleClick = (event: MouseEvent, newTab: number) => {
    event.preventDefault();
    this.switchTab(newTab);
  };

  handleKeyDown = (event: KeyboardEvent) => {
    const newIndex = getNewIndex(this.currentIndex, event, this.panels);
    this.switchTab(newIndex);
  };

  render() {
    return (
      <Host>
        <div class="tab-container">
          <ul role="tablist" ref={(e) => (this.tabs = e)}>
            {this.panels.map((t, i) => (
              <li role="presentation">
                <button
                  id={`${t.id}-tab`}
                  role="tab"
                  tabindex={i === this.currentIndex ? 0 : -1}
                  aria-selected={i === this.currentIndex ? "true" : "false"}
                  onClick={(event) => this.handleClick(event, i)}
                  onKeyDown={this.handleKeyDown}
                >
                  {t.getAttribute("title")}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <slot />
      </Host>
    );
  }
}
