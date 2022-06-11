import React from "react";

export default function Cards({ propsNews }) {
  return (
    <div className="cards-container">
      <img alt={propsNews.title} src={propsNews.image} />
      <h4>{propsNews.title}</h4>
      <p>{propsNews.description}</p>
      <p>{propsNews.url}</p>
    </div>
  );
}
