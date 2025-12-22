import Card from "../card/card";
import "./card-list.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list-container">
      {monsters.map((monster, idx) => {
        return (
          <Card
            key={idx}
            name={monster.name}
            email={monster.email}
            id={monster.id}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardList;
