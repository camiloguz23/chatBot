import React, { useState } from "react";
import "./navBar.scss";
import Login from "../Login/Login";
import Links from "../Links/Links";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <header className="header">
        <h1>{user?.displayName}</h1>
        <nav className="navbar">
          <Login onUser={(data) => setUser(data)} />
          {user?.displayName && (
            <>
              <Links path="/chat" title="Chat" />
              <Links path="/graphic" title="graphic" />
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default NavBar;
