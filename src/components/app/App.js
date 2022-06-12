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

  const URL = `https://gnews.io/api/v4/search?q=${search}&token=70e7d51750cb67d8b6fce9db19fc2953`;

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
      <DisplayNews key={news.id} propsNews={news} />
      <ScrollTop />
    </div>
  );
}

export default App;
