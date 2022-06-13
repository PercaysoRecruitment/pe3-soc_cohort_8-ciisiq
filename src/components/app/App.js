import "./App.scss";
import { useState } from "react";
import Header from "../pages/header/Header";
import Home from "../pages/home/Home";
import DisplayNews from "../pages/displayNews/DisplayNews";
import ScrollTop from "../scrollTop/ScrollTop";

//here the main fuctions will be
function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://gnews.io/api/v4/search?q=${search}&token=${API_KEY}`;
  const URL = `https://gnews.io/api/v4/search?q=${search}&token=d4aed4aaeb4f9a4bb1041a1d4d7b663a`;

  //function to handle user value
  const handleUserSearch = (e) => {
    setSearch(e.target.value);
  };

  //function to for to check if the input will not be empty
  const handleClick = (e) => {
    e.preventDefault();

    if (search.trim().length !== 0) {
      fetchNews();
    } else {
      alert("Input value is empty, please insert a keyword");
    }
  };

  //Conectando front-end com Back-end
  function fetchNews() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setNews(json.articles);
      });
  }

  //On home page I passed the fuctions that I need to use in another components
  return (
    <div className="App">
      <Header />
      <Home
        fetchPropsNews={() => fetchNews()}
        handleSearch={handleUserSearch}
        handleClick={handleClick}
      />
      <DisplayNews propsNews={news} />
      <ScrollTop />
    </div>
  );
}

export default App;
