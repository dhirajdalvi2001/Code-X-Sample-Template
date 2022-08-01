import { createContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RouteS from "./components/RouteS";
import "./css/main.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouteS />
      </BrowserRouter>
    </div>
  );
}

export default App;