import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
});

// in order to open the portal you need a context provider
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
