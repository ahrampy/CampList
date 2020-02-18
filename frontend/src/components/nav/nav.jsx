import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const { logout, loggedIn, openModal } = props;

  let buttons = loggedIn ? (
    <>
      <button className="btn" onClick={logout}>
        Log Out
      </button>

      <Link className="btn" to={`/users/${props.userId}`}>
        Account
      </Link>
    </>
  ) : (
    <>
      <button className="btn" onClick={() => openModal("login")}>
        Log In
      </button>
      <button className="btn" onClick={() => openModal("signup")}>
        Sign Up
      </button>
    </>
  );
  return (
    <header className="nav-bar-container">
      <div className="nav-bar">
        <div className="nav-home-container">
          <Link
            className="btn, nav-home"
            to="/campsites"
            style={({ textDecoration: "none" }, { outline: "none" })}
          >
            Home
          </Link>
        </div>
        <div className="nav-buttons">{buttons}</div>
      </div>
    </header>
  );
};

export default Nav;
