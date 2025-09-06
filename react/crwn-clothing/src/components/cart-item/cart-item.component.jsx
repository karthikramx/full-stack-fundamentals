const CartItem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <h2>{item.name}</h2>
      <span>{item.quantity}</span>
    </div>
  );
};

export default CartItem;
