import { ReactElement } from "react";
import Card from "./Components/Card";
import "./styles.css";

export default function App(): ReactElement {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>github changes</p>
      <Card name="debashis" age={26} striked={true} setStriked={() => {}} />
    </div>
  );
}
