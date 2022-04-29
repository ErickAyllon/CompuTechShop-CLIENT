import React from "react";
import styles from "./ProductSearched.module.css";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Filter from "../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";
import PaginationC from "../Pagination/PaginationC.jsx";

function ProductSearched() {
  const products = useSelector((state) => state.products);

  return (
    <div className={styles.searched}>
      <Categories />
      <div className={styles.productsContainer}>
        <Filter />
        <div className={styles.productsCardsContainer}>
          {products.map((el) => {
            return (
              <ProductCard
                name={el.name}
                price={el.price}
                image={el.image}
                id={el.id}
                brand={el.brand}
                description={el.description}
                calification={el.calification}
                quantity={el.quantity}
              />
            );
          })}
        </div>
      </div>
      <PaginationC />
    </div>
  );
}

export default ProductSearched;
