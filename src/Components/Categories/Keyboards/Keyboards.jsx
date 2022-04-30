import React from "react";
import styles from "./Keyboards.module.css";
import Categories from "../Categories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterByBrand, filterByCategory } from "../../../Redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";

function Keyboards() {
  const allProducts = useSelector((state) => state.allProducts);
  const products = useSelector((state) => state.products);
  const filter = useSelector((state) => state.filter);
  const productsFiltered = useSelector((state) => state.productsFiltered);
  const dispatch = useDispatch();
  const category = "Keyboards";
  // const {category} = useParams
  useEffect(() => {
    dispatch(filterByCategory(category));
  }, []);

  function handleFilterByBrand(e) {
    e.preventDefault();
    dispatch(filterByBrand(e.target.value));
    console.log(e.target.value);
  }

  const setBrand = new Set();

  const unicBrand = productsFiltered.reduce((acc, marca) => {
    if (!setBrand.has(marca.brand)) {
      setBrand.add(marca.brand, marca);
      acc.push(marca);
    }
    return acc;
  }, []);

  const brandMap = unicBrand.map((el) => el.brand);
  console.log("este el el productsFiltered", productsFiltered);
  console.log("este el el product", products);
  console.log("este es el allProducts", allProducts);
  console.log("este es el filtro", filter);
  return (
    <div className={styles.keyboards}>
      <Categories />
      {filter.length > 0 ? (
        <div>
          <div className={styles.productsContainer}>
            <select onChange={(e) => handleFilterByBrand(e)}>
              <option value="all">all</option>
              {brandMap?.map((t) => (
                <option value={t} key={t}>
                  {t}
                </option>
              ))}
            </select>
            <Filter />
            <div className={styles.productsCardsContainer}>
              {filter.map((el) => {
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
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Keyboards;
