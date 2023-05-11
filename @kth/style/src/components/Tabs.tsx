import React from "react";

interface TabProps {
  children?: React.ReactNode;
  id: string;
  title: string;
}

interface GenericTabsProps {
  classPrefix: string;
  children: React.ReactElement<TabProps>[];
  id: string;
  defaultValue?: string;
  url: "query" | "hash" | "none";
}

interface NavigationTabsProps {
  id: string;
  children: React.ReactElement<TabProps>[];
  url?: "query" | "none";
  defaultValue?: string;
}

interface ContentTabsProps {
  id: string;
  children: React.ReactElement<TabProps>[];
  url?: "hash" | "none";
  defaultValue?: string;
}

function getValueFromUrl(key?: string) {
  const url = new URL(location.href);
  if (key) {
    return url.searchParams.get(key);
  } else {
    return url.hash === "" ? null : url.hash.slice(1);
  }
}

/**
 * Sync state with URL hash or query parameter.
 * @param defaultValue Default state value
 * @param key Query parameter to use. Hash if empty
 * @param enableUrl Will sync with URL if true (this function behaves the same
 * as `React.useState` if false)
 */
function useUrlState(
  defaultValue = "",
  key = "",
  enableUrl = false
): [string, (value: string) => void] {
  const initialValue = (enableUrl && getValueFromUrl(key)) || defaultValue;
  const [value, _setValue] = React.useState(initialValue);

  React.useEffect(() => {
    function updateValue() {
      if (enableUrl) {
        _setValue(getValueFromUrl(key) || defaultValue);
      }
    }
    window.addEventListener("popstate", updateValue);

    return () => {
      window.removeEventListener("popstate", updateValue);
    };
  });

  function setValue(value: string) {
    _setValue(value);

    const url = new URL(location.href);
    if (key !== "") {
      url.searchParams.set(key, value);
    } else {
      url.hash = "#" + value;
    }

    if (enableUrl) {
      history.pushState(undefined, "", url);
    }
  }

  return [value, setValue];
}

function handleKeyDown(
  event: React.KeyboardEvent,
  index: number,
  tabs: React.ReactElement<{ id: string }>[],
  setActiveTab: (tab: string) => void
) {
  event.preventDefault();
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowUp":
      if (index > 0) {
        setActiveTab(tabs[index - 1].props.id);
      }
      break;
    case "ArrowRight":
    case "ArrowDown":
      if (index < tabs.length - 1) {
        setActiveTab(tabs[index + 1].props.id);
      }
      break;
    case "Home":
      setActiveTab(tabs[0].props.id);
      break;
    case "End":
      setActiveTab(tabs[tabs.length - 1].props.id);
      break;
  }
}

function useFocus(
  element: HTMLButtonElement | HTMLAnchorElement | null | undefined
) {
  element?.scrollIntoView({ block: "nearest", inline: "nearest" });
  element?.focus();
}

/**
 * Highly customizable Tabs component made for testing purposes.
 * You should use {@link NavigationTabs} or {@link ContentTabs} instead.
 */
export function GenericTabs({
  classPrefix,
  children,
  id,
  defaultValue,
  url = "none",
}: GenericTabsProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useUrlState(
    defaultValue,
    url === "query" ? id : "",
    url === "query" || url === "hash"
  );

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  useFocus(ref.current?.querySelector<HTMLButtonElement>(`#${activeTab}-tab`));

  return (
    <>
      <div ref={ref} className={`${classPrefix}`} id={id}>
        <ul className={`${classPrefix}__tablist`} role="tablist">
          {children.map((child, index) => (
            <li role="presentation" className={`${classPrefix}__tab-element`}>
              <button
                key={child.props.id}
                role="tab"
                aria-selected={index === activeTabIndex}
                aria-controls={child.props.id}
                id={`${child.props.id}-tab`}
                className={`${classPrefix}__tab`}
                tabIndex={index === activeTabIndex ? 0 : -1}
                onKeyDown={(event) => {
                  handleKeyDown(event, index, children, setActiveTab);
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveTab(child.props.id);
                }}
              >
                {child.props.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {children.map((child, index) => (
        <div
          className={`${classPrefix}__tabpanel`}
          role="tabpanel"
          aria-labelledby={`${child.props.id}-tab`}
          id={child.props.id}
          key={index}
          hidden={index !== activeTabIndex}
        >
          {child}
        </div>
      ))}
    </>
  );
}

export function NavigationTabs({
  id,
  children,
  url = "query",
  defaultValue,
}: NavigationTabsProps) {
  return (
    <GenericTabs
      id={id}
      children={children}
      url={url}
      defaultValue={defaultValue}
      classPrefix="kth-navigation-tabs"
    />
  );
}

export function ContentTabs({
  id,
  children,
  url = "hash",
  defaultValue,
}: ContentTabsProps) {
  return (
    <GenericTabs
      id={id}
      children={children}
      url={url}
      defaultValue={defaultValue}
      classPrefix="kth-content-tabs"
    />
  );
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}
