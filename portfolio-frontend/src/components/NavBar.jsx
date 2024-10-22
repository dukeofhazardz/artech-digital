import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="nav-content wrapper">
          <div className="logo">Artech Digital .</div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Projects
                <span className="underline" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
