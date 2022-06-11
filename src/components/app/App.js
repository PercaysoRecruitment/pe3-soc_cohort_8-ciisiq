import "./App.scss";
import { useEffect, useState } from "react";
import Header from "../pages/header/Header";
import Display from "../pages/display/Display";
import Main from "../pages/main/Main";

function App() {
  const [news, setNews] = useState("");
  const [search, setSearch] = useState("");

  const URL = `https://gnews.io/api/v4/search?q=${search}&token=70e7d51750cb67d8b6fce9db19fc2953`;

  const handleUserSearch = (e) => {
    setSearch(e.target.value);
  };

  async function fetchNews() {
    const response = await fetch(URL);
    const data = response.json();
    console.log(data);
    setNews(data);
  }

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Main
        fetchPropsNews={() => fetchNews()}
        handleSearch={handleUserSearch}
      />
      <Display propsNews={news} />
    </div>
  );
}

export default App;
