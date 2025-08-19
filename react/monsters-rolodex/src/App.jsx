import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  return (
    <div>
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
