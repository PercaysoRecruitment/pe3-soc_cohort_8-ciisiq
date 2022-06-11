import React from "react";
import Header from "../header/Header";
import "./about.scss";

export default function about() {
  return (
    <div className="about-page" id="about">
      <Header />
      <div className="wrap-about">
        <div className="wrap-titles">
          <h1>About the project</h1>
          <h2>#ReactJS #SASS #Front-End #News</h2>
        </div>
        <div className="wrap-description">
          <p className="part1">
            This project is part of a technical interview process for a
            front-end vacancy. Please note that the news is just for
            presentation only.
          </p>
          <p className="part2">
            You can check below more about the code and style.
          </p>
          <p className="part3">Thank you!</p>
          <div className="wrap-links">
            <a
              href="https://github.com/PercaysoRecruitment/pe3-soc_cohort_8-ciisiq"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.figma.com/file/NQaHoISOcFI2EvePRxW1at/Percayso-News?node-id=17%3A2"
              target="_blank"
              rel="noreferrer"
            >
              Figma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
