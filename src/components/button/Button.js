import React from "react";

export default function Button({ click }) {
  return (
    <div>
      <button className="btn" onClick={click}>
        Search
      </button>
    </div>
  );
}
