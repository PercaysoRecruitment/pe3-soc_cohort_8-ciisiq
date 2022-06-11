import "./App.scss";
import { useState } from "react";
import Header from "../pages/header/Header";
import Home from "../pages/home/Home";
import DisplayNews from "../pages/displayNews/DisplayNews";

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  // let TOKEN = process.env.TOKEN;
  const URL = `https://gnews.io/api/v4/search?q=${search}&token=70e7d51750cb67d8b6fce9db19fc2953`;

  // const URL = `https://gnews.io/api/v4/search?q=${search}&token=${TOKEN}`;

  const handleUserSearch = (e) => {
    setSearch(e.target.value);
  };

  function fetchNews() {
    //I tried to use asycn function but i got an promisse that don't alowed me to get the data.
    // const response = await fetch(URL);
    // const data = response.json();
    // setNews(data);

    fetch(URL)
      //this was the solution for to get the data from the API
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setNews(json.articles);
      });
  }

  // useEffect(() => {
  //   fetchNews();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="App">
      <Header />
      <Home
        fetchPropsNews={() => fetchNews()}
        handleSearch={handleUserSearch}
      />
      <DisplayNews key={news.id} propsNews={news} />
    </div>
  );
}

export default App;
