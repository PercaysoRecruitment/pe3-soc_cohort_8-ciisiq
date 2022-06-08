import React from "react";
import { useEffect, useState } from "react";
import Search from "../search/Search";
import Button from "../button/Button";

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

  return (
    <div>
      <h1>This is the Main</h1>
      <Search onChangeNews={handleUserSearch} />
      <Button click={() => fetchNews()} />
    </div>
  );
}
