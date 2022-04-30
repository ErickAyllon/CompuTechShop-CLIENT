import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../../../Redux/Actions";
import PaginationC from "../../Pagination/PaginationC";
import Categories from "../Categories";
import ProductCard from "../../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import styles from "./Monitors.module.css";
import Loader from "../../Loader/Loader";

function Monitors() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const category = "Monitors";
  // const {category} = useParams

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [dispatch]);

  return (
    <div className={styles.monitors}>
      <Categories />
      {products.length > 0 ? (
        <>
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
                    key={el.id}
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Monitors;
