import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="topBar">
      <div className="wrapper">
        {/* <div className="logo-wrapper">
          <h1>News</h1>
          <h4>Percayso</h4>
        </div> */}
        <div className="links-wrapper">
          <div className="container">
            <a href="#home" className="link-head">
              <span>Home</span>
            </a>
            <a href="#topNews" className="link-head">
              <span>TopNews</span>
            </a>
            <a href="#about" className="link-head">
              <span>About</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
