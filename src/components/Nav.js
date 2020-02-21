import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <NavLink to="/timer" activeClassName="active-link">
              Timer
            </NavLink>
          </li>
          <li>
            <NavLink to="/countdown" activeClassName="active-link">
              Countdown
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by{" "}
            <a href="http://www.mead.io" target="_blank">
              Rechie Lagria
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
