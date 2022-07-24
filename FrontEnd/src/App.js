import { createContext, useState } from "react";
import Body from "./components/Body";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./css/main.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

export const loginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function changeLogin() {
    setIsLoggedIn(true);
  }
  return (
    <div>
      <loginContext.Provider value={{ isLoggedIn, changeLogin }}>
        {isLoggedIn ? <Body /> : <Navigate to="/login" /> }
      </loginContext.Provider>
    </div>
  );
}

export default App;
