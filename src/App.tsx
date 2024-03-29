import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";

import InputFiled from "./components/InputFiled";
import ListProducts from "./components/ListProducts";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("a");
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState([]);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  const fetchUrl = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setList(data.drinks);
  };
  useEffect(() => {
    fetchUrl();
  }, [search]);

  return (
    <div className={styles.app}>
      <header className="App-header">
        <InputFiled search={search} setSearch={setSearch} loading={loading} />
        <ListProducts data={list} />
      </header>
    </div>
  );
};

export default App;
