import { ReactComponent as CartLogo } from "../../assets/cart.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <CartLogo className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
