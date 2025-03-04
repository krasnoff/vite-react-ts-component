import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import AccessibilityComponent from "./components/react-accessibility-component/react-accessibility-component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button />
      <AccessibilityComponent />
    </div>
  );
}

export default App;
