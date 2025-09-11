import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utlls";

import SHOP_DATA from "../shopdata";

export const ProductsContext = createContext({ products: [] });

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
