import HomePage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";

import { Link, Routes, Route } from "react-router-dom";
import CreateNewUse from "./Component/CreateNewUser/CreateNewUse";
import LoginPge from "./Component/LoginPge/LoginPge";
import { AuthContextProvider } from "./contextApi/AuthContext";
import FavouriteMove from "./Component/FavouriteMove/FavouriteMove";

function App() {
  return (
    <AuthContextProvider>
    <div className="App">
    
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/createPage"
            element={
              <>
                <CreateNewUse />
              </>
            }
          />
          <Route
            path="/loginPage"
            element={
              <>
                <LoginPge />
              </>
            }
          />
          <Route
            path="/favourite"
            element={
              <>
                <FavouriteMove />
              </>
            }
          />
        </Routes>
  
    </div>
    </AuthContextProvider>
  );
}

export default App;
