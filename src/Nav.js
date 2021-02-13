import React from "react";
import { NavLink } from "react-router-dom"
import "./nav.css";

const Nav = () => {
  return (
    <div class="container d-flex mt-3 align-items-center">
      <h1 class="h4 mb-0 title">
        Workflow
      </h1>
      <ul class="nav ml-3">
        <li class="nav-item">
          <div class="nav-link">
            <NavLink to="/viewer/" activeClassName="active">
              Viewer
            </NavLink>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link">
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