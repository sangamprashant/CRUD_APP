import React from "react";
import "./App.css";
import { AuthContext } from "./AppProvider";
import {
  AddProducts,
  AllProducts,
  Home,
  Login,
  PageNotFound,
  SideNav,
  TopNavBar,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(sessionStorage.getItem("token"));
  const [isLogin, setIsLogin] = React.useState(token ? true : false);

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, isLogin, setIsLogin }}
    >
      {isLogin ? (
        <>
          <TopNavBar />
          <SideNav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-product" element={<AddProducts />} />
              <Route path="/all-product" element={<AllProducts />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </SideNav>
        </>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  );
}

export default App;
