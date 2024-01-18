import ReactDOM from "react-dom/client";
// comment 1
// import App from "./components/App";
import { App } from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
