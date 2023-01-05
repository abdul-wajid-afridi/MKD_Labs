import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./task/App";
import DragAndDrop from "./task/components/Drag&Drop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
      {/* <DragAndDrop /> */}
    </DndProvider>
  </React.StrictMode>
);
