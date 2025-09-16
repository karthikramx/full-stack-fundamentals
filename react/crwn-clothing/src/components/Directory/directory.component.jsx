import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => {
        return <DirectoryItem key={id} imageUrl={imageUrl} title={title} />;
      })}
    </div>
  );
};

export default Directory;
