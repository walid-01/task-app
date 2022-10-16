import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TasksProvider } from "./TasksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
  // <App />
);
