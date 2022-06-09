import React from "react";
import "./search.scss";

export default function Search({ onChangeNews }) {
  return (
    <div className="search-container">
      <div className="box">
        <input
          type="text"
          className="input"
          placeholder="Enter a keyword"
          onChange={onChangeNews}
        />
      </div>
    </div>
  );
}
