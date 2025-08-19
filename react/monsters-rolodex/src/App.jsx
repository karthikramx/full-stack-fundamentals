import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import Search from "./components/search/search";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  const filteredMonsters =
    searchField === ""
      ? monsters
      : monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchField)
        );

  return (
    <div>
      <h1>Monsters Rolodex</h1>
      <Search placeholder="Search Monsters!" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
