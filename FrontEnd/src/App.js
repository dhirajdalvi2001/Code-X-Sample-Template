import { createContext, useState } from "react";
import Body from "./components/Body";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./css/main.css"

export const loginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function changeLogin(e) {
    setIsLoggedIn(e);
  }
  return (
    <div>
      <loginContext.Provider value={{ isLoggedIn, changeLogin }}>
        {isLoggedIn ?
          <div>
            <Navbar />
            <Body />
          </div>
        :
        <Login />  
      }
      </loginContext.Provider>
    </div>
  );
}

export default App;
