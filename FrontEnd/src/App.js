import { createContext, useState } from "react";
import Body from "./components/Body";
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
        <Body />
      </loginContext.Provider>
    </div>
  );
}

export default App;