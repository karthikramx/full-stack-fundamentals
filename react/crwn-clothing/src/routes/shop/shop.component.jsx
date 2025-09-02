import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {products.map(({ id, name, imageUrl, price }) => (
        <ProductCard key={id} imageUrl={imageUrl} name={name} price={price} />
      ))}
    </div>
  );
};

export default Shop;
