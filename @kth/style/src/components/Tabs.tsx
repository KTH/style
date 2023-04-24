import React from "react";

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
  const initialValue = getValueFromUrl(key) || defaultValue;
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

export function NavigationTabs({
  id,
  children,
  url = "query",
  defaultValue,
}: {
  id: string;
  children: React.ReactElement<TabProps>[];
  url?: "query" | "none";
  defaultValue?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useUrlState(
    defaultValue,
    id,
    url === "query"
  );

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  React.useEffect(() => {
    const newTab = ref.current?.querySelector<HTMLButtonElement>(
      `#${activeTab}-tab`
    );
    newTab?.scrollIntoView({ block: "nearest", inline: "nearest" });
    newTab?.focus();
  });

  return (
    <>
      <div ref={ref} className="kth-navigation-tabs" id={id}>
        <ul className="kth-navigation-tabs__tablist">
          {children.map((child, index) => (
            <li key={child.props.id}>
              <button
                id={`${child.props.id}-tab`}
                className="kth-navigation-tabs__tab"
                tabIndex={index === activeTabIndex ? 0 : -1}
                onKeyDown={(event) => {
                  event.preventDefault();
                  switch (event.key) {
                    case "ArrowLeft":
                    case "ArrowUp":
                      if (index > 0) {
                        setActiveTab(children[index - 1].props.id);
                      }
                      break;
                    case "ArrowRight":
                    case "ArrowDown":
                      if (index < children.length - 1) {
                        setActiveTab(children[index + 1].props.id);
                      }
                      break;
                    case "Home":
                      setActiveTab(children[0].props.id);
                      break;
                    case "End":
                      setActiveTab(children[children.length - 1].props.id);
                      break;
                  }
                }}
                aria-selected={index === activeTabIndex}
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
      {children[activeTabIndex]}
    </>
  );
}

export function ContentTabs({
  id,
  children,
  url = "hash",
  defaultValue,
}: {
  id: string;
  children: React.ReactElement<TabProps>[];
  url?: "hash" | "none";
  defaultValue?: string;
}) {
  const [activeTab, setActiveTab] = useUrlState(
    defaultValue,
    "",
    url === "hash"
  );

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  return (
    <>
      <div className="kth-content-tabs" id={id}>
        <ul className="kth-content-tabs__tablist">
          {children.map((child, index) => (
            <li key={child.props.id}>
              <a
                href={`#${child.props.id}`}
                className="kth-content-tabs__tab"
                aria-selected={index === activeTabIndex}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveTab(child.props.id);
                }}
              >
                {child.props.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {children[activeTabIndex]}
    </>
  );
}

interface TabProps {
  children?: React.ReactNode;
  id: string;
  title: string;
}
export function Tab({ children, id }: TabProps) {
  return <div id={id}>{children}</div>;
}
