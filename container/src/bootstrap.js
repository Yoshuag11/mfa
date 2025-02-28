// @ts-check
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log("Container");

const rootEl = document.getElementById("root");

if (rootEl !== null) {
  const root = createRoot(rootEl);

  root.render(<App />);
}
