import React from "react";

/** Get current URL hash */
function useUrlHash() {
  const [currentHash, setCurrentHash] = React.useState("");

  React.useEffect(() => {
    function updateValue(event: HashChangeEvent) {
      const hash = new URL(event.newURL).hash.slice(1);
      setCurrentHash(hash);
    }

    window.addEventListener("hashchange", updateValue);

    return () => {
      window.removeEventListener("hashchange", updateValue);
    };
  });

  return currentHash;
}

/** Get the value of the given `param` in the current URL */
function useUrlQuery(param: string) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    function updateValue() {
      const url = new URL(location.href);
      console.log(url);
      const value = url.searchParams.get(param) || "";
      setValue(value);
    }

    window.addEventListener("popstate", updateValue);
    window.addEventListener("pushstate", updateValue);
    updateValue();

    return () => {
      window.removeEventListener("popstate", updateValue);
      window.removeEventListener("pushstate", updateValue);
    };
  }, [param]);

  return value;
}

export function ContentTabs({
  id,
  children,
  url = "hash",
  defaultValue,
}: {
  id: string;
  children: React.ReactElement<TabProps>[];
  url?: "hash" | "query" | "none";
  defaultValue?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [manualActiveTab, setManualActiveTab] = React.useState("");
  const hashActiveTab = useUrlHash() || defaultValue || "";
  const queryActiveTab = useUrlQuery(id) || defaultValue || "";

  let activeTab = manualActiveTab;

  if (url === "hash") {
    activeTab = hashActiveTab;
  } else if (url === "query") {
    activeTab = queryActiveTab;
  }

  let activeTabIndex = children.findIndex((c) => c.props.id === activeTab);
  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  return (
    <div ref={containerRef} className="kth-tabs">
      <ul className="kth-tabs__tablist">
        {children.map((child, index) => (
          <li key={child.props.id}>
            <a
              href={
                url === "hash"
                  ? `#${child.props.id}`
                  : `?${id}=${child.props.id}`
              }
              className="kth-tabs__tab"
              aria-selected={index === activeTabIndex}
              onClick={(event) => {
                if (url === "none") {
                  event.preventDefault();
                  setManualActiveTab(child.props.id);
                } else if (url === "query") {
                  event.preventDefault();
                  const url = new URL(location.href);
                  url.searchParams.set(id, child.props.id);

                  history.pushState(undefined, "", url);
                }
              }}
            >
              {child.props.title}
            </a>
          </li>
        ))}
      </ul>
      {children[activeTabIndex]}
    </div>
  );
}

interface TabProps {
  children: React.ReactNode;
  id: string;
  title: string;
}
export function Tab({ children, id, title }: TabProps) {
  return <div id={id}>{children}</div>;
}
