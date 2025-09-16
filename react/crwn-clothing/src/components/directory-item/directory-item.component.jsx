import "./directory-item.styles.scss";

const DirectoryItem = ({ imageUrl, title }) => {
  return (
    <div className="directory-item-container">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
