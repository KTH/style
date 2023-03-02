import React from "react";

interface TabContainerProps {
  // id: string;
  children: React.ReactNode;
  // url: "query" | "hash" | "none";
}

interface TabListProps {
  appearance: "secondary" | "tertiary";
  size?: "medium" | "small" | "inherit";
  tabs: {
    id: string;
    label: string;
  }[];
}

interface TabPanelProps {
  id: string;
  children: React.ReactNode;
}

interface TabContext {
  activeTab: string;
  setActiveTab(id: string): void;
}
const TabContext = React.createContext<TabContext>({
  activeTab: "",
  setActiveTab() {},
});

export function TabContainer({ children }: TabContainerProps) {
  const [activeTab, setActiveTab] = React.useState("");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}

export function TabList({ tabs, appearance, size = "inherit" }: TabListProps) {
  const { activeTab, setActiveTab } = React.useContext(TabContext);
  const currentIndex = tabs.findIndex((t) => t.id === activeTab);
  const ref = React.createRef<HTMLUListElement>();
  const className = [
    "kth-0-tab-list",
    appearance,
    size === "inherit" ? "" : `kth-0-${size}`,
  ].join(" ");

  React.useEffect(() => {
    setActiveTab(tabs[0]?.id || "");
  }, []);

  React.useEffect(() => {
    const newTab = ref.current?.querySelector<HTMLAnchorElement>(
      `#${activeTab}-tab`
    );

    newTab?.scrollIntoView({ block: "nearest", inline: "nearest" });
    newTab?.focus();
  }, [activeTab]);

  function handleKeyDown(event: React.KeyboardEvent) {
    switch (event.code) {
      case "ArrowRight":
        event.preventDefault();
        setActiveTab(tabs[Math.min(currentIndex + 1, tabs.length - 1)].id);
        break;
      case "ArrowLeft":
        event.preventDefault();
        setActiveTab(tabs[Math.max(currentIndex - 1, 0)].id);
        break;
    }
  }

  function handleClick(newId: string, event: React.MouseEvent) {
    event.preventDefault();
    setActiveTab(newId);
  }

  return (
    <div className={className}>
      <ul ref={ref} onKeyDown={handleKeyDown} role="tablist">
        {tabs.map((tab) => (
          <li role="presentation" key={tab.id}>
            <a
              onClick={(event) => handleClick(tab.id, event)}
              id={tab.id + "-tab"}
              href={"#" + tab.id}
              role="tab"
              tabIndex={tab.id === activeTab ? 0 : -1}
              aria-selected={tab.id === activeTab ? "true" : "false"}
              aria-controls={tab.id}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TabPanel({ id, children }: TabPanelProps) {
  const { activeTab } = React.useContext(TabContext);

  return (
    <section
      hidden={activeTab !== id}
      role="tabpanel"
      id={id}
      aria-labelledby={id + "-tab"}
    >
      {children}
    </section>
  );
}
