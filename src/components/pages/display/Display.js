import React from "react";
import Cards from "../../cards/Cards";

export default function Display({ propsNews }) {
  return (
    <div>
      <div className="news-display">
        <h2>The news</h2>
        <img alt={propsNews.title} src={propsNews.image} />
        <h4>{propsNews.title}</h4>
        <p>{propsNews.description}</p>
        <p>{propsNews.url}</p>
      </div>
    </div>
  );
}
