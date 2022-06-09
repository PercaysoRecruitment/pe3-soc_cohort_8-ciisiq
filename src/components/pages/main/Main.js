import React from "react";
import { useEffect, useState } from "react";
import Search from "../../search/Search";
import Button from "../../button/Button";
import "./main.scss";

export default function Main() {
  const [news, setNews] = useState();
  const [search, setSearch] = useState("");

  const URL = `https://gnews.io/api/v4/search?q=${search}&token=70e7d51750cb67d8b6fce9db19fc2953`;

  const handleUserSearch = (e) => {
    setSearch(e.target.value);
  };

  async function fetchNews(theNews) {
    const response = await fetch(URL);
    const data = response.json();
    theNews = data;
    console.log(theNews);
    setNews(theNews);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news);

  return (
    <div className="home-container">
      <div className="wrapper-container">
        <div className="left">
          <div className="wrapper-logo">
            <h1>News</h1>
            <h3>Percayso</h3>
          </div>
        </div>
        <div className="right">
          <div className="wrapper-title">
            <h1>Find the last</h1>
            <div className="wrap-p">
              <p className="p1">News</p>
              <p className="p2"> in the world</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-input">
        <div className="wrap-both">
          <Search className="srch" onChangeNews={handleUserSearch} />
          <Button className="btn" click={() => fetchNews()} />
        </div>
      </div>
    </div>
  );
}
