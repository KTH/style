import React from "react";

const TabsContext = React.createContext({
  activeTab: "",
});

export function NavigationTabs({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

interface TabProps {
  children: React.ReactNode;
}
export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}
