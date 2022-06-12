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
            <Link to="/Home">Home</Link>
            <a href="#news">News</a>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
