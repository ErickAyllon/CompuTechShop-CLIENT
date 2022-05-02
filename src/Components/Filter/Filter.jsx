import styles from "./Filter.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrandCategoriesFilter, filterByBrand2, filterByBrand, getProducts } from "../../Redux/Actions";

function Filter() {
  const allProductsFilter = useSelector((state) => state.allProductsFilter);
  const productsFilter = useSelector((state) => state.productsFilter);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();


  useEffect(() => {
  }, [products]);

  const setBrand = new Set();

  const unicBrand = products.reduce((acc, marca) => {
    if (!setBrand.has(marca.brand)) {
      setBrand.add(marca.brand, marca);
      acc.push(marca);
    }
    return acc;
  }, []);

  const brandMap = unicBrand.map((el) => el.brand);

  function handleFilterByBrand(e) {
    e.preventDefault();
    dispatch(filterByBrand2(e.target.value));
    console.log(e.target.value)
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filterContainer}>

        <select onChange={(e) => handleFilterByBrand(e)}>
              <option value="all">all</option>
              {brandMap?.map((t) => (
                <option value={t} key={t}>
                  {" "}
                  {t}{" "}
                </option>
              ))}
        </select>

      </div>
    </div>
  );
}

export default Filter;
