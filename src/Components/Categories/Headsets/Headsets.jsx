import React from "react";
import styles from "./Headsets.module.css";
import Categories from "../Categories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterByCategory } from "../../../Redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";

function Headsets() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const category = "Headsets";
  // const {category} = useParams

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [dispatch]);

  return (
    <div className={styles.headsets}>
      <Categories />
      {products.length > 0 ? (
        <div>
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Headsets;
