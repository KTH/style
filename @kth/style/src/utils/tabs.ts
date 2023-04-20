/**
 * Get the "current" tab from the URL
 *
 * @param name Query parameter name. If not provided, will return the hash parameter
 */
export function getCurrentTabFromUrl(
  name: string,
  panels: HTMLElement[],
  defaultTab = ""
) {
  const url = new URL(window.location.href);
  const tabName = name === "" ? url.hash.slice(1) : url.searchParams.get(name);

  let index = panels.findIndex((p) => p.id === tabName);

  if (index === -1) {
    index = panels.findIndex((p) => p.id === defaultTab);
  }

  if (index === -1) {
    index = 0;
  }

  return index;
}

export function setCurrentTabInUrl(name: string, panel: HTMLElement) {
  const url = new URL(window.location.href);
  if (name === "") {
    url.hash = panel.id;
  } else {
    url.searchParams.set(name, panel.id);
  }
  window.history.pushState({}, "", url.toString());
}

/** Show the current tab */
export function switchPanel(panels: HTMLElement[], currentTab: number) {
  panels.forEach((panel, index) => {
    if (index === currentTab) {
      panel.hidden = false;
    } else {
      panel.hidden = true;
    }
  });
}

export function getNewIndex(
  currentIndex: number,
  event: KeyboardEvent,
  panels: HTMLElement[]
) {
  let direction = 0;

  switch (event.key) {
    case "ArrowLeft":
    case "ArrowUp":
      direction = -1;
      break;
    case "ArrowRight":
    case "ArrowDown":
      direction = 1;
      break;
    case "Home":
      direction = -Infinity;
      break;
    case "End":
      direction = Infinity;
      break;
  }

  const newIndex = currentIndex + direction;

  if (newIndex >= 0 && newIndex < panels.length) {
    return newIndex;
  }

  return currentIndex;
}
