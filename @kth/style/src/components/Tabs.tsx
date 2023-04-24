import React from "react";

export function NavigationTabs({
  children,
}: {
  children: React.ReactElement<TabProps>[];
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div ref={containerRef} className="kth-tabs">
      <ul className="kth-tabs__tablist">
        {children.map((child, index) => (
          <li key={child.props.id}>
            <button
              className="kth-tabs__tab"
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {child.props.title}
            </button>
          </li>
        ))}
      </ul>
      {children[activeTab]}
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
