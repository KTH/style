import React from "react";

/** Get current URL hash */
function useUrlHash() {
  const [currentHash, setCurrentHash] = React.useState("");

  React.useEffect(() => {
    function updateValue(event?: HashChangeEvent) {
      const hash = new URL(event?.newURL || location.href).hash.slice(1);
      setCurrentHash(hash);
    }

    window.addEventListener("hashchange", updateValue);
    updateValue();

    return () => {
      window.removeEventListener("hashchange", updateValue);
    };
  });

  return currentHash;
}

/** Keep in sync the value of the query parameter `param` */
function useUrlQuery(param: string): [string, (value: string) => void] {
  const [value, _setValue] = React.useState("");

  React.useEffect(() => {
    function updateValue() {
      const url = new URL(location.href);
      const value = url.searchParams.get(param) || "";
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [queryTab, setQueryTab] = useUrlQuery(id);
  const [manualTab, setManualTab] = React.useState(defaultValue || "");

  const activeTab = url === "query" ? queryTab : manualTab;

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }
  return (
    <>
      <div ref={containerRef} className="kth-navigation-tabs" id={id}>
        <ul className="kth-navigation-tabs__tablist">
          {children.map((child, index) => (
            <li key={child.props.id}>
              <button
                className="kth-navigation-tabs__tab"
                aria-selected={index === activeTabIndex}
                onClick={(event) => {
                  event.preventDefault();

                  if (url === "query") {
                    setQueryTab(child.props.id);
                  } else {
                    setManualTab(child.props.id);
                  }
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [manualActiveTab, setManualActiveTab] = React.useState("");
  const hashActiveTab = useUrlHash() || defaultValue || "";

  const activeTab = url === "hash" ? hashActiveTab : manualActiveTab;

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  return (
    <>
      <div ref={containerRef} className="kth-content-tabs" id={id}>
        <ul className="kth-content-tabs__tablist">
          {children.map((child, index) => (
            <li key={child.props.id}>
              <a
                href={`#${child.props.id}`}
                className="kth-content-tabs__tab"
                aria-selected={index === activeTabIndex}
                onClick={(event) => {
                  if (url === "none") {
                    event.preventDefault();
                    setManualActiveTab(child.props.id);
                  }
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
