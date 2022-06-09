import React from "react";
import "./button.scss";

export default function Button({ click }) {
  return (
    <div>
      <button className="btn" onClick={click}>
        Search
      </button>
    </div>
  );
}
