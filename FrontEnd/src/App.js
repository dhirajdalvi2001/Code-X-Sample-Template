import { createContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import RouteS from "./components/RouteS";
import "./css/main.css";


export const loginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function changeLogin() {
    setIsLoggedIn(true);
  }
  return (
    <div>
      <loginContext.Provider value={{ isLoggedIn, changeLogin }}>
      <BrowserRouter>
        <RouteS />
      </BrowserRouter>
      </loginContext.Provider>
    </div>
  );
}

export default App;