import React from "react";
import { data } from "../../../data";
import "./display.scss";

export default function Display({ propsNews }) {
  return (
    <div className="news-display">
      <div className="title-container">
        <h2>The news</h2>
      </div>
      <div className="card-container">
        {propsNews.map((d) => (
          <div className="styleCard">
            <img className="styleImage" alt={d.title} src={d.image} />
            <h4 className="styleCardTitle">{d.title}</h4>
            <p className="styleDescription">{d.description}</p>
            <a
              className="styleLink"
              href={d.url}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
