import React from "react";
import "./displayNews.scss";
// import { data } from "../../../data";

export default function DisplayNews({ propsNews }) {
  return (
    <div className="news-display" id="news">
      <div className="title-container">
        <h2>Check the news</h2>
      </div>
      <div className="card-container">
        {/* {data.map((d) => (
          <div key={d.id} className="styleCard">
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
        ))} */}

        {propsNews.map((d) => (
          <div key={d.id} className="styleCard">
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
