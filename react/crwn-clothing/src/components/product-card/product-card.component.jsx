import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = (product) => {
  const { id, name, price, imageUrl } = product;
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => {
          addItemToCart(product);
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
