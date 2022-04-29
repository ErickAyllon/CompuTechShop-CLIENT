import React from "react";
import styles from "./AllProducts.module.css";
import Categories from "../Categories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts, filterByBrand } from "../../../Redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";

function AllProducts() {
  const allProducts = useSelector((state) => state.allProducts);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function handleFilterByBrand(e) {
    e.preventDefault();
    dispatch(filterByBrand(e.target.value));
  }

  const setBrand = new Set();

  const unicBrand = allProducts.reduce((acc, marca) => {
    if (!setBrand.has(marca.brand)) {
      setBrand.add(marca.brand, marca);
      acc.push(marca);
    }
    return acc;
  }, []);

  const brandMap = unicBrand.map((el) => el.brand);

  return (
    <div className={styles.allProducts}>
      <Categories />
      {allProducts.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            <select onChange={(e) => handleFilterByBrand(e)}>
              <option value="all">all</option>
              {brandMap?.map((t) => (
                <option value={t} key={t}>
                  {" "}
                  {t}{" "}
                </option>
              ))}
              {/* <option value = "Hp">Brand</option>
          <option value = "Price">Price</option> */}
            </select>
            <Filter />
            <div className={styles.productsCardsContainer}>
              {products.map((el) => {
                return (
                  <ProductCard
                    name={el.name}
                    price={el.price}
                    image={el.image}
                    key={el.id}
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

export default AllProducts;
