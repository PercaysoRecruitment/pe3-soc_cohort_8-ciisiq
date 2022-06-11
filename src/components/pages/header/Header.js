import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="topBar">
      <div className="wrapper">
        <div className="links-wrapper">
          <nav className="container">
            <Link to="/Home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/topNews">TopNews</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
