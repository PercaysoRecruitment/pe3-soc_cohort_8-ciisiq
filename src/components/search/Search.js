import React from "react";
import "./search.scss";

//This is a component that user will search the news, I tried to put the button inside
//but I was not able to do it in time.
export default function Search({ onChangeNews }) {
  return (
    <div className="search-container">
      <form className="box">
        <div className="wrap-form">
          <input
            data-testid="input"
            type="text"
            className="input"
            placeholder="Enter a keyword e.g.: Google"
            onChange={onChangeNews}
          />
        </div>
      </form>
    </div>
  );
}
