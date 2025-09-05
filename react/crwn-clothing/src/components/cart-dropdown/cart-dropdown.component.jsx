import Button from "../button/button.component";

const CartDropDown = ({ items }) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <span className="name">{item.name}</span>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <Button type="inverted">Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
