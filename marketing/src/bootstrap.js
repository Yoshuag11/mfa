import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

console.log("Marketing");
/**
 * @param {Element} el DOM element to add content into
 */
export function mount(el) {
  const root = createRoot(el);

  root.render(<App />);
}

if (process.env.NODE_ENV === "development") {
  const rootEl = document.getElementById("marketing-root-dev");

  if (rootEl !== null) {
    mount(rootEl);
  }
}
export default mount;
