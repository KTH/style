import { useState } from "react";
import "./App.css";
import { Button } from "@kth/ui-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
      <p>Count is: {count}</p>
    </div>
  );
}

export default App;
