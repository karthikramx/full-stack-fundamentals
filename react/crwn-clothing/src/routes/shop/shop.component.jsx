import { useContext } from "react";
import { CategoriesContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((key) => (
        <>
          <h3 key={key}>{key}</h3>
          <div className="products-container">
            {categoriesMap[key].map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default Shop;
