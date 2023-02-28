import React from "react";

interface TabContainerProps {
  // id: string;
  // appearance: "secondary" | "tertiary";
  // size: "medium" | "small";
  children: React.ReactNode;
  // url: "query" | "hash" | "none";
}

interface TabListProps {
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
      <div className="kth-0-tabs">{children}</div>
    </TabContext.Provider>
  );
}

export function TabList({ tabs }: TabListProps) {
  const { activeTab, setActiveTab } = React.useContext(TabContext);
  const currentIndex = tabs.findIndex((t) => t.id === activeTab);
  const ref = React.createRef<HTMLUListElement>();

  React.useEffect(() => {
    setActiveTab(tabs[0]?.id || "");
  }, []);

  React.useEffect(() => {
    ref.current?.querySelector<HTMLAnchorElement>(`#${activeTab}-tab`)?.focus();
  }, [activeTab]);

  function handleKeyDown(event: React.KeyboardEvent) {
    switch (event.code) {
      case "ArrowRight":
        setActiveTab(tabs[Math.min(currentIndex + 1, tabs.length - 1)].id);
        break;
      case "ArrowLeft":
        setActiveTab(tabs[Math.max(currentIndex - 1, 0)].id);
        break;
    }
  }

  function handleClick(newId: string, event: React.MouseEvent) {
    event.preventDefault();
    setActiveTab(newId);
  }

  return (
    <ul ref={ref} onKeyDown={handleKeyDown}>
      {tabs.map((tab) => (
        <li role="presentation" key={tab.id}>
          <a
            onClick={(event) => handleClick(tab.id, event)}
            id={tab.id + "-tab"}
            href={"#" + tab.id}
            role="tab"
            tabIndex={tab.id === activeTab ? 0 : -1}
            aria-selected={tab.id === activeTab ? "true" : "false"}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
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
