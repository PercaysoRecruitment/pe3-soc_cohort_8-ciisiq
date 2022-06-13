import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

//Header is fixed one the top of the page
export default function Header() {
  return (
    <div className="topBar">
      <div className="wrapper">
        <div className="links-wrapper">
          <nav className="container">
            <Link data-testid="link" to="/Home">
              Home
            </Link>
            <a data-testid="link" href="#news">
              News
            </a>
            <Link data-testid="link" to="/about">
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
