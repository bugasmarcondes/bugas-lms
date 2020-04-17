import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";

export default function Navbar() {
  const activeStyle = { backgroundColor: "rgba(0, 0, 0, 0.1)" };

  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper container">
          <NavLink activeStyle={activeStyle} to="/" exact>
            <span className="brand-logo">Bugas LMS</span>
          </NavLink>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink activeStyle={activeStyle} to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/courses">
                Courses
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink activeStyle={activeStyle} to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/courses">
            Courses
          </NavLink>
        </li>
      </ul>
    </>
  );
}
