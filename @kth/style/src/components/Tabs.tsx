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

export function ContentTabs({
  children,
}: {
  children: React.ReactElement<TabProps>[];
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Use URL as a source of truth
  const activeTab = useUrlHash();

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
              href={`#${child.props.id}`}
              className="kth-tabs__tab"
              aria-selected={index === activeTabIndex}
              onClick={() => {
                // setActiveTab(index);
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
