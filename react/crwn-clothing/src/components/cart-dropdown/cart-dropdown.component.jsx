import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-items">
      <div className="cart-dropdown-container">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <Button type="inverted">Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
