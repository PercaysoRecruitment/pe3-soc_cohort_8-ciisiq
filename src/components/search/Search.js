import React from "react";

export default function Search({ onChangeNews }) {
  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="Enter a keyword"
        onChange={onChangeNews}
      />
    </div>
  );
}
