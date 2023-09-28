function getPanel(tab: HTMLElement) {
  const panelId = tab.getAttribute("aria-controls");
  if (!panelId) {
    throw new Error();
  }

  const panel = document.getElementById(panelId);

  if (!(panel instanceof HTMLElement)) {
    throw new Error();
  }

  return panel;
}

function closeAllTabs(tabs: NodeListOf<Element>) {
  for (const tab of tabs) {
    if (tab instanceof HTMLElement) {
      tab.ariaSelected = "false";
      const panel = getPanel(tab);

      if (panel) {
        panel.hidden = true;
      }
    }
  }
}

export function initTabs(container: Element) {
  if (!(container instanceof HTMLElement)) {
    return;
  }

  const tablist = container.querySelector("[role=tablist]");

  if (!tablist) {
    return;
  }

  const tabs = tablist.querySelectorAll("[role=tab]");

  function openTab(tab: HTMLElement) {
    const panel = getPanel(tab);

    if (!panel) {
      return;
    }

    tab.ariaSelected = "true";
    panel.hidden = false;
  }

  for (const tab of tabs) {
    if (tab instanceof HTMLElement) {
      tab.addEventListener("click", () => {
        closeAllTabs(tabs);
        openTab(tab);
      });
    }
  }

  if (tabs[0] instanceof HTMLElement) {
    closeAllTabs(tabs);
    openTab(tabs[0]);
  }
}
