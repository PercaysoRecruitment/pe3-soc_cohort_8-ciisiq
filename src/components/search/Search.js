import React from "react";
// import Button from "../button/Button";
import "./search.scss";

export default function Search({ onChangeNews, click }) {
  return (
    <div className="search-container">
      <form className="box">
        <div className="wrap-form">
          <input
            type="text"
            className="input"
            placeholder="Enter a keyword e.g.: Google"
            onChange={onChangeNews}
          />
          {/* <button className="btn2" onClick={click}>
            Search
          </button> */}
        </div>
      </form>
    </div>
  );
}
