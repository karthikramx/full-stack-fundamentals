import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
        alt={`Monster ${props.name}`}
      />
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
