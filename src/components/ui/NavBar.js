import React, { useContext } from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    navigate("login", { replace: true });
  };

  return (
    <nav>
      <Link className="logo" to="/">
        Heroes
      </Link>

      <NavLink
        className={({ isActive }) => " " + (isActive ? "active" : "")}
        to="/marvel"
      >
        Marvel
      </NavLink>

      <NavLink
        className={({ isActive }) => " " + (isActive ? "active" : "")}
        to="/dc"
      >
        DC
      </NavLink>

      <div className="logout">
        <p> {user.name} </p>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
