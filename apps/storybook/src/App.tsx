import { Button, Translation } from "@kth/ui-components";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
      <p>Count is: {count}</p>

      <Translation
        panelCloseText="Close"
        noTranslationLabel="This page does not have any translations"
        panelHref="/en"
        panelLinkLabel="Start page in English"
        linkLabel="English"
      />
    </div>
  );
}

export default App;
