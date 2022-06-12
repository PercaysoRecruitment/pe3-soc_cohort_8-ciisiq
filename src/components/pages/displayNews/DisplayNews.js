import React from "react";
import "./displayNews.scss";
// import { data } from "../../../data";

//This is the page where we show user request when they used the isearch bar
export default function DisplayNews({ propsNews }) {
  //One my project I used a data localy just for to do de design because I only have 100 request diary

  //I used map for to create the cards using the information from the API.
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
          <div key={d.url} className="styleCard">
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
