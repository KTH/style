import React from "react";

/** Get current URL hash */
function useUrlHash(): [string, (value: string) => void] {
  const [value, _setValue] = React.useState("");

  React.useEffect(() => {
    function updateValue() {
      const hash = new URL(location.href).hash.slice(1);
      _setValue(hash);
    }

    window.addEventListener("popstate", updateValue);
    updateValue();

    return () => {
      window.removeEventListener("popstate", updateValue);
    };
  });

  function setValue(newValue: string) {
    const url = new URL(location.href);
    url.hash = "#" + newValue;
    history.pushState(undefined, "", url);

    _setValue(newValue);
  }

  return [value, setValue];
}

/** Keep in sync the value of the query parameter `param` */
function useUrlQuery(param: string): [string, (value: string) => void] {
  const [value, _setValue] = React.useState("");

  React.useEffect(() => {
    function updateValue() {
      const value = new URL(location.href).searchParams.get(param) || "";
      _setValue(value);
    }

    window.addEventListener("popstate", updateValue);
    updateValue();

    return () => {
      window.removeEventListener("popstate", updateValue);
    };
  }, [param]);

  function setValue(newValue: string) {
    const url = new URL(location.href);
    url.searchParams.set(param, newValue);
    history.pushState(undefined, "", url);

    _setValue(newValue);
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
  const [queryTab, setQueryTab] = useUrlQuery(id);
  const [manualTab, setManualTab] = React.useState(defaultValue || "");

  const activeTab = url === "query" ? queryTab : manualTab;

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  function setActiveTab(newTab: string) {
    if (url === "query") {
      setQueryTab(newTab);
    } else {
      setManualTab(newTab);
    }
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
  const [hashTab, setHashTab] = useUrlHash();
  const [manualTab, setManualTab] = React.useState(defaultValue || "");

  const activeTab = url === "hash" ? hashTab : manualTab;

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  function setActiveTab(newTab: string) {
    if (url === "hash") {
      setHashTab(newTab);
    } else {
      setManualTab(newTab);
    }
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
