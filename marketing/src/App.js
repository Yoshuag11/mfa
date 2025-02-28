// @ts-check
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyles from "@mui/material/GlobalStyles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
export default function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          a: { textDecoration: "none" },
          ul: { listStyle: "none", margin: 0, padding: 0 },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
