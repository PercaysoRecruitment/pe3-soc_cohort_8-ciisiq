import React from "react";
import "./button.scss";

//This is the component button, that will do the fetch resquest when clicked
export default function Button({ click }) {
  return (
    <div>
      <button className="btn" onClick={click}>
        Search
      </button>
    </div>
  );
}
