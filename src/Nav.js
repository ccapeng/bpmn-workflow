import React from "react";
import { NavLink } from "react-router-dom"
import "./nav.css";

const Nav = () => {
  return (
    <div className="container d-flex mt-3 align-items-center">
      <h1 className="h4 mb-0 title">
        Workflow
      </h1>
      <ul className="nav ml-3">
        <li className="nav-item">
          <div className="nav-link">
            <NavLink to="/viewer/" activeClassName="active">
              Viewer
            </NavLink>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <NavLink to="/editor/" activeClassName="active">
              Editor
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nav;