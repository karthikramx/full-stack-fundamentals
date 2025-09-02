import Button from "../button/button.component";

const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
