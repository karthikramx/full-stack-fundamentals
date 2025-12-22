import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  console.log("From Category Preview");
  console.log(title);
  console.log(products);

  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              product={product}
              price={product.price}
              name={product.name}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
