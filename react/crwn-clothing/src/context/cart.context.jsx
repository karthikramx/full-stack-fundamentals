import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // this is a new product!
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  setCartItem: () => {},
});

// in order to open the portal you need a context provider
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    console.log("triggered in context");
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
